'use client'
import { useState } from 'react';
import { addNuevoAuto } from '../../actions/clientes/actions';
import SelectorTipoAuto from '../SelectorTipoAuto/SelectorTipoAuto';
import ColorPickerInput from './ColorPicker';
import { toast } from 'sonner';

export default function ModalNuevoAuto({ clienteId, modelos }: { clienteId: number, modelos: any[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsPending(true);
    try {
      await addNuevoAuto(formData);
      setIsOpen(false);
      toast.success('¡Auto registrado correctamente!'); // Notificación de éxito
    } catch (error) {
      toast.error('Hubo un error al registrar el auto');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="ml-2 bg-green-500 hover:bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-lg font-bold transition-colors"
        title="Agregar nuevo auto"
      >
        +
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <form action={handleSubmit} 
                className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl animate-in zoom-in duration-200">
            <h2 className="text-xl font-bold mb-4">Nuevo Auto para Cliente</h2>
            <input type="hidden" name="clienteId" value={clienteId} />
            
            <div className="space-y-4">
              <input name="placa" placeholder="PLACA" required className="w-full p-2 border rounded uppercase font-mono" />
              <input name="marca" placeholder="MARCA (Ej: Toyota)" required className="w-full p-2 border rounded" />
              
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase">Modelo/Tipo</label>
                <SelectorTipoAuto modelos={modelos} />
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase">Color</label>
                <ColorPickerInput defaultValue="#3b82f6" />
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <button type="button" onClick={() => setIsOpen(false)} className="flex-1 py-2 text-gray-500 font-bold">Cancelar</button>
              <button type="submit" disabled={isPending} className={`flex-1 py-2 rounded-lg font-bold text-white transition-all ${
                  isPending ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                {isPending ? 'Guardando...' : 'Guardar Auto'}</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}