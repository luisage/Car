'use client'
import { useActionState, useEffect, useRef, useState } from 'react';
import { addVentaExistente } from '../../actions/clientes/actions';

export default function BtnVentaRapida({ 
  autoId, 
  clienteId, 
  servicios 
}: { 
  autoId: number, 
  clienteId: number, 
  servicios: any[] 
}) {
  // Usamos useActionState para manejar la respuesta de la acción
  const [state, formAction, isPending] = useActionState(addVentaExistente, null);
  const [showGratis, setShowGratis] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();

      // SI EL CONTADOR LLEGÓ A 5, LANZAMOS EL CONFETI
      if (state.contador === 5) {
        // Sonido de éxito (opcional)
        const audio = new Audio('/success-sound.mp3'); // Si tienes uno en public
        audio.play().catch(() => {}); 

        // Confeti de ráfaga
        /*confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#22c55e', '#eab308', '#3b82f6']
        });*/

        // Alerta visual de navegador
        //alert("🎉 ¡FELICIDADES! Este es el 5to lavado. ¡ES GRATIS PARA EL CLIENTE! 🎁");
        // 2. Mostrar Modal
        setShowGratis(true);

        // 3. Cerrar automáticamente después de 4 segundos
        setTimeout(() => setShowGratis(false), 3000);
      }
    }
  }, [state]);

  // Limpiar el select si la venta fue exitosa
  /*useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);*/

  return (
    <>
      {/* EL MODAL DE PREMIO */}
      {showGratis && (
        <div className="fixed inset-0 z-[99] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center border-4 border-yellow-400 transform animate-in zoom-in duration-300 scale-110">
            <div className="text-6xl mb-4">🎁</div>
            <h2 className="text-3xl font-black text-gray-900 mb-2 italic">¡LAVADO DE CORTESÍA!</h2>
            <p className="text-lg text-gray-600">Este es el servicio número <span className="font-bold text-blue-600">5</span></p>
            <div className="mt-6 py-2 px-4 bg-yellow-100 text-yellow-800 font-bold rounded-full inline-block">
              VALOR: $0.00
            </div>
            <p className="mt-4 text-xs text-gray-400">Esta ventana se cerrará sola...</p>
          </div>
        </div>
      )}

    <form ref={formRef} action={formAction} className="flex flex-col gap-1 mt-2">
      <input type="hidden" name="autoId" value={autoId} />
      <input type="hidden" name="clienteId" value={clienteId} />
      
      <select 
        name="servicioData" 
        className="text-[10px] p-1 border rounded bg-white w-full focus:ring-1 focus:ring-green-500 outline-none" 
        required
        disabled={isPending}
      >
        <option value="">¿Nuevo Lavado?</option>
        {servicios.map(s => (
          <option key={s.id} value={`${s.id}|${s.costo}`}>
            {s.nombre} (${s.costo})
          </option>
        ))}
      </select>
      
      <button 
        type="submit" 
        disabled={isPending}
        className={`text-white text-[10px] py-1 px-2 rounded transition-colors ${
          isPending ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'
        }`}
      >
        {isPending ? 'Registrando...' : '+ Registrar Venta'}
      </button>

      {/* Mini mensaje de error si falla */}
      {state?.error && (
        <p className="text-[9px] text-red-600 font-bold leading-tight">{state.error}</p>
      )}
    </form>
    </>
  );
}