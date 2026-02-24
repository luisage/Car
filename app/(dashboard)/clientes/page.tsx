import { prisma } from '@/lib/prisma';
//import { addClienteConAuto } from '../../actions/clientes/actions'; // Importa la nueva acción
import Search from '../../components/Search';
import FormCliente from '../../components/Clientes/FormClientes'
import BtnVentaRapida from '../../components/Clientes/BtnVentaRapida'
import MenuAccionesCliente from '../../components/Clientes/MenuAccionesCliente'
import MenuAccionesAuto from '../../components/Clientes/MenuAccionesAuto'

export default async function ClientesPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;

  /*const clientes = await prisma.cliente.findMany({
    where: {
      nombre: { contains: query, mode: 'insensitive' },
    },
    include: { autos: true }, // Traemos los autos de cada cliente
    orderBy: { id: 'desc' },
  });*/
  const clientes = await prisma.cliente.findMany({
  where: { nombre: { contains: query, mode: 'insensitive' } },
  include: { 
    autos: {
      include: { ventas: { orderBy: { id: 'desc' }, take: 1 } } // Traer última venta
    } 
  },
  orderBy: { id: 'desc' },
});

  const servicios = await prisma.servicio.findMany({
    orderBy: { nombre: 'asc' }
  });

  const modelosAutos = await prisma.tipoAuto.findMany({
  orderBy: { carroceria: 'asc' }
  });

  /*const servicios = serviciosDB.map(servicio => ({
  costo: servicio.costo.toString() // <--- Esto soluciona el error
    }));*/

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Registro de Lavado</h1>
          <p className="text-gray-600">Ingresa los datos del cliente y su vehículo.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulario Unificado */}
          <section className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 sticky top-10">
              
                <FormCliente servicios={servicios} modelos={modelosAutos}/>  
            </div>
          </section>

          {/* Lista de Registros */}
          <section className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Clientes Recientes</h2>
                <Search />
              </div>
              
              <div className="grid gap-4">
                {clientes.map((cliente) => (
                  <div key={cliente.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-900">{cliente.nombre}</h3>
                        <p className="text-sm text-gray-500">{cliente.celular || 'Sin teléfono'}</p>
                      </div>
                      <div className="flex items-center gap-3">
    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-bold">
      {cliente.autos.length} Auto(s)
    </span>
    {/* AGREGAMOS EL BOTÓN AQUÍ 
    <ModalNuevoAuto clienteId={cliente.id} modelos={modelosAutos} /> */}
    <MenuAccionesCliente cliente={cliente} modelos={modelosAutos} />
  </div>
                    </div>
                    
                    {/* Lista de autos del cliente */}
                    <div className="mt-3 pt-3 border-t border-gray-200 flex flex-col gap-3">
                      {cliente.autos.map(auto => {
                      const ultimoContador = auto.ventas[0]?.contadorPromocion || 0;
  
                      return (
                        <div key={auto.id} className="text-xs bg-white p-2 rounded border border-gray-300 flex items-center justify-between w-full">
                          <div className="flex-1">
                            <div className="flex items-baseline gap-2 mb-1">
                              <p className="font-bold text-blue-600">{auto.placa}</p>
                              <p className="text-gray-500 uppercase text-[10px]">{auto.marca} {auto.modelo}</p>
                              <MenuAccionesAuto auto={auto} modelos={modelosAutos} />
                            </div>
                            {/* Barra de Progreso visual */}
                            <div className="flex items-center gap-3">
                              <div className="flex gap-1 w-32">
                                {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className={`h-2 w-full rounded-full ${
                                  i <= ultimoContador ? (i === 5 ? 'bg-yellow-400' : 'bg-green-500') : 'bg-gray-100'
                                  }`}
                                />
                                ))}
                              </div>
                              <p className="text-[11px] text-gray-400 font-medium">
                              {ultimoContador === 5 ? '¡Próximo es GRATIS!' : `Lavado ${ultimoContador} de 5`}
                              </p>
                            </div>
                          </div>

                          {/* Botón para nueva venta */}
                          <div className="flex flex-col gap-2 min-w-[180px]">
                            <BtnVentaRapida autoId={auto.id} clienteId={cliente.id} servicios={servicios}/>
                          </div>
                        </div>
                      )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

// Estilo auxiliar para los inputs
const inputStyle = "w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none";
/*<form action={addClienteConAuto} className="flex flex-col gap-4">
                
                <p className="text-xs font-bold text-gray-400 uppercase">Datos del Cliente</p>
                <input name="nombre" placeholder="Nombre" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" required />
                <input name="apellido" placeholder="Apellido" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" required />
                <input name="celular" placeholder="Teléfono" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />

                <p className="text-xs font-bold text-gray-400 uppercase mt-2">Datos del Auto</p>
                <input name="placa" placeholder="Placa" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" required />
                <input name="marca" placeholder="Marca (Ej: Toyota)" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" required />
                <input name="modelo" placeholder="Modelo (Ej: Corolla)" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" required />
                <input name="tipo" placeholder="Tipo" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" required />
                <input name="color" placeholder="Color" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" required />

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-colors mt-2">
                  Registrar Cliente y Auto
                </button>
              </form>
              ------------
                    <div className="mt-3 pt-3 border-t border-gray-200 flex gap-2">
                      {cliente.autos.map(auto => (
                        <div key={auto.id} className="text-xs bg-white p-2 rounded border">
                          <p className="font-bold">{auto.placa}</p>
                          <p className="text-gray-500">{auto.marca} {auto.modelo}</p>
                        </div>
                      ))}
                    </div>
                ------------
              */ 