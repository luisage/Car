// app/historial/page.tsx
import { prisma } from "@/lib/prisma";
import { format } from "date-fns"; // Opcional: npm install date-fns
import FiltroPlaca from "../../components/ventas/FiltroPlaca";
import FiltroFecha from "../../components/ventas/FiltroFecha";
import TicketVenta from "../../components/ventas/TicketVenta";

export default async function HistorialPage({
  searchParams,
}: {
  searchParams: Promise<{ placa?: string; fecha?: string }>
}) {
  const { placa, fecha } = await searchParams;

  // 1. Calcular el rango de tiempo (desde las 00:00 hasta las 23:59 de la fecha elegida)
  const fechaSeleccionada = fecha ? new Date(fecha + 'T00:00:00') : new Date();
  
  const inicioDia = new Date(fechaSeleccionada);
  inicioDia.setHours(0, 0, 0, 0);

  const finDia = new Date(fechaSeleccionada);
  finDia.setHours(23, 59, 59, 999);

  // 2. Consulta a Prisma
  const ventas = await prisma.venta.findMany({
    where: {
      createdAt: {
        gte: inicioDia,
        lte: finDia,
      },
      auto: placa ? {
        placa: { contains: placa, mode: 'insensitive' }
      } : {}
    },
    include: {
      cliente: true,
      auto: true,
      servicio: true,
      user: { select: { name: true } },
    },
    orderBy: { createdAt: 'desc' }
  });
  /*const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  const ventas = await prisma.venta.findMany({
    where: {
      createdAt: { gte: hoy }
    },
    include: {
      cliente: true,
      auto: true,
      user: { select: { name: true } }, // El empleado que lo registró
      servicio: true
    },
    orderBy: { createdAt: 'desc' }
  });*/
  const ventasPlanificadas = ventas.map(v => ({
  ...v,
  // Convertimos las fechas a strings (ISO)
  createdAt: v.createdAt.toISOString(),
  // Convertimos todos los posibles Decimales a números o strings
  total: v.total.toString(),

  // Si tienes campos Decimal en cliente o auto, conviértelos también aquí
}));

  const totalCaja = ventas.reduce((acc, v) => acc + Number(v.total), 0);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <header className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Historial de Ventas</h1>
          <div className="flex flex-wrap gap-4 items-end mt-4">
            <FiltroFecha />
            <div className="flex flex-col">
              <label className="text-[10px] font-bold text-gray-400 uppercase mb-1">Buscar Vehículo</label>
              <FiltroPlaca />
            </div>
          </div>
        </div>
        
        <div className="bg-blue-600 p-4 rounded-xl text-white shadow-lg w-full md:w-auto text-center">
          <p className="text-xs font-bold uppercase opacity-80">Recaudado en Fecha</p>
          <p className="text-3xl font-black">${totalCaja.toFixed(2)}</p>
        </div>
      </header>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase">Hora</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase">Cliente / Auto</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase">Servicio</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase">Atendió</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase text-right">Etapa</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase text-center">Acción</th>
            </tr>
          </thead>
          <tbody>
            {ventasPlanificadas.map((v) => (
              <tr key={v.id} className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 text-sm text-gray-600">
                  {new Date(v.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </td>
                <td className="p-4">
                  <p className="font-bold text-gray-900">{v.cliente.nombre}</p>
                  <p className="text-xs text-blue-600 font-mono">{v.auto.placa}</p>
                </td>
                <td className="p-4 text-sm">
                  <p className="font-bold text-gray-900">{v.servicio.nombre}</p>
                  <p className="text-xs text-blue-600 font-mono">{Number(v.total) === 0 ? (
                    <span className="text-green-600 italic">Gratis</span>
                    ) : (
                    `$${Number(v.total).toFixed(2)}`
                    )}</p>
                </td>
                <td className="p-4 text-sm text-gray-600">{v.user.name}</td>
                <td className="p-4 text-right font-bold">
                  {Number(v.total) === 0 ? (
                    <span className="text-green-600 italic">Gratis</span>
                  ) : (
                    `$${Number(v.total).toFixed(2)}`
                  )}
                </td>
                <td className="p-4 text-center">
                    <TicketVenta venta={v} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {ventas.length === 0 && (
          <div className="p-20 text-center text-gray-400">No hay ventas registradas hoy.</div>
        )}
      </div>
    </div>
  );
}