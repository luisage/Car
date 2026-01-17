'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce'; // npm install use-debounce

export default function FiltroPlaca() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('placa', term.toUpperCase());
    } else {
      params.delete('placa');
    }
    replace(`/ventas?${params.toString()}`);
  }, 300);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="🔍 Buscar por placa..."
        className="p-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none w-48"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('placa')?.toString()}
      />
    </div>
  );
}