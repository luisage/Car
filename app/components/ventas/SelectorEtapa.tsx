'use client'
import { cambiarEtapaDinamica } from '../../actions/ventas/actions';
import { toast } from 'sonner';

interface EtapaInfo {
  etapaId: number;
  orden: number;
  nombre: string;
}

export default function SelectorEtapa({ 
  ventaId, 
  etapaActualId, 
  etapaActualNombre,
  etapasDelServicio 
}: { 
  ventaId: number, 
  etapaActualId: number,
  etapaActualNombre: string,
  etapasDelServicio: EtapaInfo[] 
}) {
  
  // Encontrar el orden de la etapa actual dentro de este servicio
  const relacionActual = etapasDelServicio.find(e => e.etapaId === etapaActualId);
  const ordenActual = relacionActual?.orden ?? 0;

  // Determinar si hay etapas antes o después
  const tieneAnterior = etapasDelServicio.some(e => e.orden < ordenActual);
  const tieneSiguiente = etapasDelServicio.some(e => e.orden > ordenActual);

  const manejarCambio = async (dir: 'SIGUIENTE' | 'ANTERIOR') => {
    try {
      await cambiarEtapaDinamica(ventaId, dir);
    } catch (error) {
      toast.error("No se pudo cambiar la etapa");
    }
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <button 
        onClick={() => manejarCambio('ANTERIOR')}
        disabled={!tieneAnterior}
        className="text-blue-600 disabled:text-gray-300 hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
      </button>

      <div className="bg-gray-100 px-3 py-1 rounded-md min-w-[110px] text-center border border-gray-200">
        <span className="text-[10px] font-bold text-gray-700 uppercase">
          {etapaActualNombre}
        </span>
      </div>

      <button 
        onClick={() => manejarCambio('SIGUIENTE')}
        disabled={!tieneSiguiente}
        className="text-blue-600 disabled:text-gray-300 hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
      </button>
    </div>
  );
}