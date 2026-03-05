'use client'
import { useState } from 'react';
import { Plus, Edit2, Trash2, X } from 'lucide-react';
import { saveServicio, deleteServicio } from '../../../actions/configuracion/servicio';
import { toast } from 'sonner';

export default function SeccionServicios({ servicios }: { servicios: any[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingServicio, setEditingServicio] = useState<any>(null);

  const handleEdit = (servicio: any) => {
    setEditingServicio(servicio);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm('¿Estás seguro de eliminar este servicio?')) {
      await deleteServicio(id);
      toast.success('Servicio eliminado');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-700">Catálogo de Servicios</h3>
        <button 
          onClick={() => { setEditingServicio(null); setIsModalOpen(true); }}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
        >
          <Plus size={18} /> Nuevo Servicio
        </button>
      </div>

      <div className="overflow-hidden border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Costo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Descripción</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {servicios.map((s) => (
              <tr key={s.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{s.nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap text-blue-600 font-bold">${s.costo}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{s.descripcion || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => handleEdit(s)} className="text-amber-600 hover:text-amber-900"><Edit2 size={16}/></button>
                    <button onClick={() => handleDelete(s.id)} className="text-red-600 hover:text-red-900"><Trash2 size={16}/></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL PARA CREAR / EDITAR */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <form 
            action={async (fd) => {
              await saveServicio(fd);
              setIsModalOpen(false);
              toast.success(editingServicio ? 'Actualizado' : 'Creado');
            }}
            className="relative bg-white rounded-xl p-6 w-full max-w-md shadow-2xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{editingServicio ? 'Editar Servicio' : 'Nuevo Servicio'}</h2>
              <button type="button" onClick={() => setIsModalOpen(false)}><X size={20}/></button>
            </div>
            
            <input type="hidden" name="id" value={editingServicio?.id || ''} />
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nombre del Servicio</label>
                <input name="nombre" defaultValue={editingServicio?.nombre} required className="w-full p-2 border rounded-md" placeholder="Ej: Lavado Premium" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Costo ($)</label>
                <input name="costo" type="number" defaultValue={editingServicio?.costo} required className="w-full p-2 border rounded-md" placeholder="0.00" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Descripción</label>
                <textarea name="descripcion" defaultValue={editingServicio?.descripcion} className="w-full p-2 border rounded-md" rows={3} placeholder="¿Qué incluye?" />
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-2 border rounded-md">Cancelar</button>
              <button type="submit" className="flex-1 py-2 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700">
                {editingServicio ? 'Guardar Cambios' : 'Crear Servicio'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}