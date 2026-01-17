'use client'
import { useRouter, useSearchParams } from 'next/navigation';

export default function FiltroFecha() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  // Obtenemos la fecha de la URL o por defecto la de hoy (en formato YYYY-MM-DD)
  const fechaActual = searchParams.get('fecha') || new Date().toISOString().split('T')[0];

  const handleDateChange = (date: string) => {
    const params = new URLSearchParams(searchParams);
    if (date) {
      params.set('fecha', date);
    } else {
      params.delete('fecha');
    }
    replace(`/ventas?${params.toString()}`);
  };

  return (
    <div className="flex flex-col">
      <label className="text-[10px] font-bold text-gray-400 uppercase mb-1">Fecha de consulta</label>
      <input
        type="date"
        className="p-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white"
        onChange={(e) => handleDateChange(e.target.value)}
        defaultValue={fechaActual}
      />
    </div>
  );
}