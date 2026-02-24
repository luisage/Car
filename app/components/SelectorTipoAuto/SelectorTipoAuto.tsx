'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SelectorTipoAuto({ modelos, defaultValue }: { modelos: any[]; defaultValue?: string; }) {
  const [isOpen, setIsOpen] = useState(false);
  const [filtro, setFiltro] = useState("");
  const [seleccionado, setSeleccionado] = useState("");

  useEffect(() => {
    if (defaultValue) {
      setSeleccionado(defaultValue);
      
    }
  }, [defaultValue, modelos]);

  useEffect(() => {
    if (!isOpen) {
      setFiltro(""); 
    }
  }, [isOpen]);

  // Obtener categorías únicas para el select del buscador
  const categorias = Array.from(new Set(modelos.map(m => m.carroceria)));

  const modelosFiltrados = modelos.filter(m => 
    filtro === "" || m.carroceria === filtro
  );

  return (
    <div className="w-full">
      <div className="flex gap-2">
        <input 
          name="tipo" 
          readOnly 
          value={seleccionado} 
          placeholder="Selecciona tipo de auto"
          className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
          required
        />
        <button 
          type="button"
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          🚗
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 backdrop-blur-md">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl animate-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Catálogo de Autos</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-400">✕</button>
            </div>

            {/* Buscador / Filtro por Carrocería */}
            <select 
              className="w-full p-2 border rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setFiltro(e.target.value)}
            >
              <option value="">Todas las carrocerías</option>
              {categorias.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {/* Lista de Modelos */}
            <div className="grid grid-cols-2 gap-3 max-h-60 overflow-y-auto p-1">
              {modelosFiltrados.map((modelo) => (
                <button
                  key={modelo.id}
                  type="button"
                  onClick={() => {
                    setSeleccionado(modelo.nombre);
                    setIsOpen(false);
                  }}
                  className="flex flex-col items-center p-4 border rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group relative overflow-hidden"
                >
                  <div className="relative w-20 h-12 mb-2 group-hover:scale-110 transition-transform">
                    <Image //src="/imagenAuto/placeHolderPNG.png" width={500} height={500} alt='Imagen2'  
                    src={modelo.imagen || '/imagenAuto/placeholder.png'} 
                    alt={modelo.nombre}
                    fill // Ocupa todo el contenedor padre
                    className="object-contain" // Mantiene la proporción sin deformar
                    unoptimized
                    // Si la imagen falla (error 404), cargamos la de por defecto
                    onError={(e) => {
                    (e.target as HTMLImageElement).src = '/imagenAuto/placeholder.png';
                    }}
                    />
                    </div>
                  <span className="text-xs font-bold text-gray-700">{modelo.nombre}</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest">{modelo.carroceria}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}