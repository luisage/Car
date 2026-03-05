// components/Configuracion/noticia/gestionNoticia.tsx
'use client'
import { useState } from 'react';
import { Plus, Edit2, Trash2, X, Megaphone, CheckCircle, XCircle } from 'lucide-react';
import { saveNoticia, deleteNoticia, toggleNoticiaEstatus } from '../../../actions/configuracion/noticias';
import { toast } from 'sonner';

export default function SeccionNoticias({ noticias }: { noticias: any[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNoticia, setEditingNoticia] = useState<any>(null);

  const handleEdit = (noticia: any) => {
    setEditingNoticia(noticia);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-700 flex items-center gap-2">
          <Megaphone size={20} className="text-blue-600"/> Tablón de Anuncios
        </h3>
        <button 
          onClick={() => { setEditingNoticia(null); setIsModalOpen(true); }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm flex items-center gap-2"
        >
          <Plus size={18} /> Nueva Noticia
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {noticias.map((n) => (
          <div key={n.id} className={`p-5 border rounded-2xl transition-all ${n.estatus ? 'bg-white border-slate-200' : 'bg-gray-50 border-gray-200 opacity-75'}`}>
            <div className="flex justify-between items-start mb-3">
              <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-md ${n.estatus ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>
                {n.estatus ? 'Activa' : 'Borrador'}
              </span>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(n)} className="text-slate-400 hover:text-blue-600"><Edit2 size={16}/></button>
                <button onClick={() => deleteNoticia(n.id)} className="text-slate-400 hover:text-red-600"><Trash2 size={16}/></button>
              </div>
            </div>
            <h4 className="font-bold text-slate-800 mb-1">{n.titulo}</h4>
            <p className="text-sm text-slate-500 line-clamp-2">{n.descripcion}</p>
            
            <button 
              onClick={() => toggleNoticiaEstatus(n.id, n.estatus)}
              className="mt-4 text-xs font-medium flex items-center gap-1 text-blue-600 hover:underline"
            >
              {n.estatus ? <XCircle size={14}/> : <CheckCircle size={14}/>}
              {n.estatus ? 'Desactivar' : 'Publicar ahora'}
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <form 
            action={async (fd) => {
              await saveNoticia(fd);
              setIsModalOpen(false);
              toast.success('Noticia guardada');
            }}
            className="relative bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl"
          >
            <h2 className="text-xl font-bold mb-6">{editingNoticia ? 'Editar Noticia' : 'Nueva Noticia'}</h2>
            <input type="hidden" name="id" value={editingNoticia?.id || ''} />
            <input type="hidden" name="estatus" value={editingNoticia ? String(editingNoticia.estatus) : 'true'} />
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Título</label>
                <input name="titulo" defaultValue={editingNoticia?.titulo} required className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ej: ¡Gran Apertura!" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Descripción / Contenido</label>
                <textarea name="descripcion" defaultValue={editingNoticia?.descripcion} required className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500" rows={4} placeholder="Escribe el mensaje aquí..." />
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-3 border rounded-xl font-medium">Cancelar</button>
              <button type="submit" className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                Guardar Noticia
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}