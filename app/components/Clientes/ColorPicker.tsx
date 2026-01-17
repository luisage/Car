'use client'
import { useState, useRef, useEffect } from "react";
import { HexColorPicker } from "react-colorful";

export default function ColorPickerInput({ defaultValue = "#3b82f6" }: { defaultValue?: string }) {
  const [color, setColor] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const popover = useRef<HTMLDivElement>(null);

  // Cerrar la paleta si haces clic fuera de ella
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popover.current && !popover.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex items-center gap-2 w-full">
      {/* Input de texto para el código Hex */}
      <input
        name="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none uppercase font-mono text-sm"
        placeholder="#FFFFFF"
      />

      {/* Botón/Icono del Selector */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-md border border-gray-300 shadow-sm transition-transform active:scale-90"
        style={{ backgroundColor: color }}
        title="Seleccionar color"
      >
        <span className="sr-only">Elegir color</span>
      </button>

      {/* Popover con la paleta de colores */}
      {isOpen && (
        <div 
          ref={popover}
          className="absolute right-0 bottom-full mb-2 z-50 p-3 bg-white rounded-xl shadow-2xl border border-gray-200 animate-in zoom-in duration-150"
        >
          <HexColorPicker color={color} onChange={setColor} />
          <div className="mt-3 flex items-center justify-between gap-2">
            <div className="text-[10px] font-bold text-gray-400 uppercase">Previsualización</div>
            <div className="w-full h-4 rounded" style={{ backgroundColor: color }}></div>
          </div>
        </div>
      )}
    </div>
  );
}