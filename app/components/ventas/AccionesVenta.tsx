'use client'
import { useState } from 'react';
import { actualizarEstatusVenta } from '../../actions/ventas/actions';
import { toast } from 'sonner';

export default function AccionesVenta({ venta, children }: { venta: any, children: React.ReactNode }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleEstatus = async (nuevoEstatus: string) => {
    try {
      await actualizarEstatusVenta(venta.id, nuevoEstatus);
      toast.success(`Venta ${nuevoEstatus.toLowerCase()} correctamente`);
      setShowMenu(false);
    } catch (error) {
      toast.error("Error al actualizar la venta");
    }
  };

  return (
  <div className="relative inline-block text-left">
    <button 
      onClick={() => setShowMenu(!showMenu)}
      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
      </svg>
    </button>

    {showMenu && (
      <>
        <div className="fixed inset-0 z-10" onClick={() => setShowMenu(false)}></div>
        <div className="absolute right-0 bottom-full mb-2 w-48 rounded-xl shadow-2xl bg-white ring-1 ring-black ring-opacity-10 z-[100] overflow-visible animate-in fade-in slide-in-from-bottom-2 duration-200">
          {/* Nota: Usamos 'bottom-full mb-2' para que siempre se abra hacia ARRIBA. 
              Si prefieres que sea dinámico, deja 'mt-2' y asegúrate de que la tabla 
              no tenga 'overflow-hidden'.
          */}
          <div className="py-2 bg-white rounded-xl">
        
           {children}
        

        <button
          onClick={() => handleEstatus("Cerrada")}
          className="w-full text-left px-4 py-3 text-sm text-green-700 hover:bg-green-50 flex items-center gap-3 transition-colors"
        >
          <span className="text-lg">✅</span> Cerrar Venta
        </button>

        <button
          onClick={() => handleEstatus("Cancelada")}
          className="w-full text-left px-4 py-3 text-sm text-red-700 hover:bg-red-50 flex items-center gap-3 transition-colors"
        >
          <span className="text-lg">🚫</span> Cancelar Venta
        </button>
      </div>
      
      {/* Triangulito decorativo (opcional) apuntando hacia abajo */}
      <div className="absolute -bottom-1 right-4 w-2 h-2 bg-white rotate-45 border-r border-b border-black/5"></div>
    </div>
  </>
)}
  </div>
);
}