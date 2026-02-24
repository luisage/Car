'use client'
import { useState } from 'react';
import { updateAuto } from '../../actions/clientes/actions'; // Debes crear esta acción
import SelectorTipoAuto from '../SelectorTipoAuto/SelectorTipoAuto';
import ColorPickerInput from './ColorPicker';
import { toast } from 'sonner';
import { X } from 'lucide-react';

export default function ModalEditarAuto({ auto, modelos, onClose }: { auto: any, modelos: any[], onClose: () => void }) {
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsPending(true);
    try {
      await updateAuto(auto.id, formData);
      toast.success('¡Auto actualizado correctamente!');
      onClose();
    } catch (error) {
      toast.error('Hubo un error al actualizar el auto');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <form action={handleSubmit} className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Editar Auto</h2>
          <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600"><X size={20}/></button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase">Placa</label>
            <input 
              name="placa" 
              defaultValue={auto.placa} 
              required 
              className="w-full p-2 border rounded uppercase font-mono" 
            />
          </div>

          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase">Marca</label>
            <input 
              name="marca" 
              defaultValue={auto.marca} 
              required 
              className="w-full p-2 border rounded" 
            />
          </div>

          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase">Modelo</label>
            <input 
              name="modelo" 
              defaultValue={auto.modelo} 
              required 
              className="w-full p-2 border rounded" 
            />
          </div>

          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase">Tipo de carrocería</label>
            {/* Si tu selector soporta defaultValue pasándoselo por prop, úsalo aquí */}
            <SelectorTipoAuto modelos={modelos} defaultValue={auto.tipo} />
          </div>

          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase">Color</label>
            <ColorPickerInput defaultValue={auto.color || "#3b82f6"} />
          </div>
        </div>

        <div className="flex gap-2 mt-6">
          <button type="button" onClick={onClose} className="flex-1 py-2 border border-gray-300 rounded-md">Cancelar</button>
          <button 
            type="submit" 
            disabled={isPending} 
            className={`flex-1 py-2 rounded-lg font-bold text-white ${isPending ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {isPending ? 'Actualizando...' : 'Actualizar'}
          </button>
        </div>
      </form>
    </div>
  );
}