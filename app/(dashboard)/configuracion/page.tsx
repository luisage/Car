// app/configuracion/page.tsx
import { Settings } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import TabsConfiguracion from '../../components/Configuracion/tabsConfiguracion';

export default async function ConfiguracionPage() {
  // Ahora sí puedes usar Prisma aquí
  const servicios = await prisma.servicio.findMany({ 
    include: {
    etapa: {
      include: {
        etapa: true
      }
    }
  },
  orderBy: { id: 'asc' }
   });
  const etapas = await prisma.etapa.findMany({ orderBy: { id: 'asc' } });

  const noticias = await prisma.noticias.findMany({ orderBy: { id: 'desc' } });

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8 flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-lg text-white">
            <Settings size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Configuración del Sistema</h1>
            <p className="text-gray-600">Administra el catálogo de servicios y flujo de trabajo.</p>
          </div>
        </header>

        {/* Pasamos los datos al componente de cliente */}
        <TabsConfiguracion serviciosIniciales={servicios} etapasIniciales={etapas} noticiasIniciales={noticias}/>
      </div>
    </div>
  );
}
/*export default function ConfiguracionPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Configuración</h1>
        <p className="text-gray-600">Administra las preferencias de tu cuenta y el sistema.</p>
      </header>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 max-w-2xl">
        <h3 className="text-lg font-semibold mb-4">Perfil de Administrador</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre del Dashboard</label>
            <input type="text" defaultValue="AppDB Admin" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Notificaciones por Email</label>
            <input type="checkbox" defaultChecked className="mt-2 h-4 w-4 text-blue-600" />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  )
}*/