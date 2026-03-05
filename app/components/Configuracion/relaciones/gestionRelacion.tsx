// components/Configuracion/relacion/SeccionRelacionar.tsx
'use client'
import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { GripVertical, Plus, Trash2, Save } from 'lucide-react';
import { actualizarRelacionesEtapas } from '../../../actions/configuracion/relaciones';
import { toast } from 'sonner';

export default function SeccionRelacionar({ servicios, etapas }: { servicios: any[], etapas: any[] }) {
  const [servicioSeleccionado, setServicioSeleccionado] = useState<number | null>(null);
  const [etapasDelServicio, setEtapasDelServicio] = useState<any[]>([]);
  const [isPending, setIsPending] = useState(false);

  // Cargar las etapas cuando cambie el servicio seleccionado
  useEffect(() => {
    if (servicioSeleccionado) {
      const servicio = servicios.find(s => s.id === servicioSeleccionado);
      // Mapeamos las etapas relacionadas y las ordenamos
      const relacionadas = servicio.etapa
        .sort((a: any, b: any) => a.orden - b.orden)
        .map((se: any) => se.etapa);
      setEtapasDelServicio(relacionadas);
    }
  }, [servicioSeleccionado, servicios]);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(etapasDelServicio);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setEtapasDelServicio(items);
  };

  const agregarEtapa = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = parseInt(e.target.value);
    if (!id) return;
    if (etapasDelServicio.find(et => et.id === id)) {
      toast.error("Esta etapa ya está agregada al servicio");
      return;
    }
    const nuevaEtapa = etapas.find(et => et.id === id);
    setEtapasDelServicio([...etapasDelServicio, nuevaEtapa]);
    e.target.value = ""; // Reset select
  };

  const quitarEtapa = (id: number) => {
    setEtapasDelServicio(etapasDelServicio.filter(et => et.id !== id));
  };

  const guardarCambios = async () => {
    if (!servicioSeleccionado) return;
    setIsPending(true);
    const ids = etapasDelServicio.map(et => et.id);
    const res = await actualizarRelacionesEtapas(servicioSeleccionado, ids);
    if (res.success) toast.success("Flujo de trabajo guardado");
    else toast.error(res.error);
    setIsPending(false);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">1. Selecciona un Servicio</label>
          <select 
            className="w-full p-2.5 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            onChange={(e) => setServicioSeleccionado(Number(e.target.value))}
          >
            <option value="">Seleccionar...</option>
            {servicios.map(s => <option key={s.id} value={s.id}>{s.nombre}</option>)}
          </select>
        </div>

        {servicioSeleccionado && (
          <div className="animate-in fade-in slide-in-from-top-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">2. Agregar Etapa al Flujo</label>
            <select 
              className="w-full p-2.5 border rounded-lg outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-700 font-medium"
              onChange={agregarEtapa}
            >
              <option value="">+ Añadir etapa...</option>
              {etapas.map(e => <option key={e.id} value={e.id}>{e.nombre}</option>)}
            </select>
          </div>
        )}
      </div>

      {servicioSeleccionado && (
        <div className="border rounded-xl p-4 bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-gray-700">Orden del Proceso</h4>
            <span className="text-xs text-gray-400">Arrastra para reordenar</span>
          </div>

          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="etapas">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
                  {etapasDelServicio.map((etapa, index) => (
                    <Draggable key={etapa.id} draggableId={etapa.id.toString()} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className="flex items-center justify-between p-3 bg-white border rounded-lg shadow-sm group"
                        >
                          <div className="flex items-center gap-3">
                            <div {...provided.dragHandleProps} className="text-gray-400 cursor-grab active:cursor-grabbing">
                              <GripVertical size={20} />
                            </div>
                            <span className="flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                              {index + 1}
                            </span>
                            <span className="font-medium text-gray-800">{etapa.nombre}</span>
                          </div>
                          <button 
                            onClick={() => quitarEtapa(etapa.id)}
                            className="text-gray-300 hover:text-red-600 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          {etapasDelServicio.length === 0 && (
            <div className="text-center py-10 text-gray-400 border-2 border-dashed rounded-lg">
              No hay etapas en este servicio
            </div>
          )}

          <button
            onClick={guardarCambios}
            disabled={isPending}
            className="w-full mt-6 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 disabled:bg-gray-400 transition-all shadow-lg shadow-blue-200"
          >
            <Save size={20} />
            {isPending ? 'Guardando...' : 'Guardar Configuración de Flujo'}
          </button>
        </div>
      )}
    </div>
  );
}