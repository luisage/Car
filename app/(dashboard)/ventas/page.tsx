// app/historial/page.tsx
import { prisma } from "@/lib/prisma";
//import { cambiarEtapaDinamica } from '../../actions/ventas/actions';
import { format } from "date-fns"; // Opcional: npm install date-fns
import FiltroPlaca from "../../components/ventas/FiltroPlaca";
import FiltroFecha from "../../components/ventas/FiltroFecha";
import TicketVenta from "../../components/ventas/TicketVenta";
import SelectorEtapa from "../../components/ventas/SelectorEtapa";
import AccionesVenta from "../../components/ventas/AccionesVenta";

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
      servicio: {
        include: {
          etapa: {
            include: { etapa: {select: {nombre:true}} },
            orderBy: { orden: 'asc' } // Traemos las etapas en orden
          }
        },
      },
      etapa: {select: { nombre: true} },
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

      <div className="bg-white rounded-xl shadow-sm border">
        
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-gray-50 rounded-xl border-b">
            <tr>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase">Hora</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase">Cliente / Auto</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase">Servicio</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase">Atendió</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase text-center">Etapa</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase text-center">Acción</th>
            </tr>
          </thead>
          <tbody>
            {ventasPlanificadas.map((v) => (
              <tr key={v.id} className="border-b">
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
                <td className="p-4 text-center">
                  {v.estatus === "Activa" ? (
                  <SelectorEtapa 
                  ventaId={v.id}
                  etapaActualId={v.etapaId}
                  etapaActualNombre={v.etapa.nombre}
                  etapasDelServicio={v.servicio.etapa.map(se => ({
                    etapaId: se.etapaId,
                    orden: se.orden,
                    nombre: se.etapa.nombre
                  }))}
                  />
                  ) : (
                    <span className={`text-xs font-bold uppercase p-2 rounded-lg bg-white border shadow-sm ${
                      v.estatus === "Cerrada" ? "text-green-600 border-green-100" : "text-red-600 border-red-100"
                    }`}>
                      {v.estatus}
                    </span>
                  )}
                </td>
                <td className="p-4 text-center">
                  {v.estatus === "Activa" ? (
                  <AccionesVenta venta={v}>
                    <TicketVenta venta={v} />
                  </AccionesVenta>
                  ) : (
                    <div className="opacity-30 grayscale cursor-not-allowed inline-block p-2">
                       {/* Icono bloqueado o simplemente deshabilitado */}
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 1.944A11.94 11.94 0 012.166 5C2.056 5.254 2 5.52 2 5.791c0 5.087 3.353 9.388 8 10.209 4.647-.821 8-5.122 8-10.209 0-.271-.056-.537-.166-.791A11.94 11.94 0 0110 1.944zM10 14a4 4 0 100-8 4 4 0 000 8z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {ventas.length === 0 && (
          <div className="p-20 text-center text-gray-400">No hay ventas registradas.</div>
        )}
        
      </div>
    </div>
  );
}