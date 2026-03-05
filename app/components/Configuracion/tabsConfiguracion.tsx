'use client'
import { useState } from 'react';
import { Layers, Workflow, Briefcase, Newspaper } from 'lucide-react';
import SeccionServicios from '../../components/Configuracion/servicio/gestionServicio';
import SeccionEtapas from '../../components/Configuracion/etapa/gestionEtapa';
import SeccionRelaciones from '../../components/Configuracion/relaciones/gestionRelacion';
import SeccionNoticias from '../../components/Configuracion/noticias/gestionNoticia';

export default function TabsConfiguracion({ serviciosIniciales, etapasIniciales, noticiasIniciales }: { serviciosIniciales: any[], etapasIniciales: any[], noticiasIniciales: any[] }) {
  const [tabActiva, setTabActiva] = useState('servicios');

  const tabs = [
    { id: 'servicios', label: 'Servicios', icon: <Briefcase size={18} /> },
    { id: 'etapas', label: 'Etapas', icon: <Layers size={18} /> },
    { id: 'relacionar', label: 'Relacionar Etapas', icon: <Workflow size={18} /> },
    { id: 'noticias', label: 'Noticias', icon: <Newspaper size={18} /> },
  ];

  return (
    <>
      <div className="flex border-b border-gray-200 mb-6 gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setTabActiva(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all border-b-2 ${
              tabActiva === tab.id
                ? 'border-blue-600 text-blue-600 bg-blue-50/50'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            } rounded-t-lg`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 min-h-[400px]">
        {tabActiva === 'servicios' && (
          <SeccionServicios servicios={serviciosIniciales} />
        )}
        
        {tabActiva === 'etapas' && (
          <SeccionEtapas etapas={etapasIniciales} />
        )}

        {tabActiva === 'relacionar' && (
          <SeccionRelaciones servicios={serviciosIniciales} etapas={etapasIniciales} />
        )}

        {tabActiva === 'noticias' && (
          <SeccionNoticias noticias={noticiasIniciales} />
        )}
      </div>
    </>
  );
}