// components/Configuracion/etapa/gestionEtapa.tsx
'use client'
import { useState } from 'react';
import { Plus, Edit2, Trash2, X } from 'lucide-react';
import { saveEtapa, deleteEtapa } from '../../../actions/configuracion/etapas';
import { toast } from 'sonner';

export default function SeccionEtapas({ etapas }: { etapas: any[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEtapa, setEditingEtapa] = useState<any>(null);

  const handleEdit = (etapa: any) => {
    setEditingEtapa(etapa);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm('¿Estás seguro de eliminar esta etapa?')) {
      try {
        await deleteEtapa(id);
        toast.success('Etapa eliminada');
      } catch (error) {
        toast.error('No se puede eliminar: la etapa está en uso');
      }
    }
  };

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-700">Flujo de Trabajo (Etapas)</h3>
        <button 
          onClick={() => { setEditingEtapa(null); setIsModalOpen(true); }}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"
        >
          <Plus size={18} /> Nueva Etapa
        </button>
      </div>

      <div className="overflow-hidden border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {etapas.map((e) => (
              <tr key={e.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{e.nombre}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{e.descripcion || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => handleEdit(e)} className="text-amber-600 hover:text-amber-900"><Edit2 size={16}/></button>
                    <button onClick={() => handleDelete(e.id)} className="text-red-600 hover:text-red-900"><Trash2 size={16}/></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <form 
            action={async (fd) => {
              await saveEtapa(fd);
              setIsModalOpen(false);
              toast.success(editingEtapa ? 'Etapa actualizada' : 'Etapa creada');
            }}
            className="relative bg-white rounded-xl p-6 w-full max-w-md shadow-2xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{editingEtapa ? 'Editar Etapa' : 'Nueva Etapa'}</h2>
              <button type="button" onClick={() => setIsModalOpen(false)}><X size={20}/></button>
            </div>
            
            <input type="hidden" name="id" value={editingEtapa?.id || ''} />
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Nombre de la Etapa</label>
                <input name="nombre" defaultValue={editingEtapa?.nombre} required className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Ej: Aspirado" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Descripción</label>
                <textarea name="descripcion" defaultValue={editingEtapa?.descripcion} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none" rows={3} placeholder="Detalles de la tarea..." />
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-2 border rounded-md hover:bg-gray-50 transition-colors">Cancelar</button>
              <button type="submit" className="flex-1 py-2 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 transition-all">
                {editingEtapa ? 'Guardar Cambios' : 'Crear Etapa'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}