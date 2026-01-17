'use client'

export default function TicketVenta({ venta }: { venta: any }) {
  const imprimir = () => {
    window.print();
  };

  return (
    <>
      {/* Botón que se ve en la pantalla */}
      <button 
        onClick={imprimir}
        className="text-gray-400 hover:text-blue-600 transition-colors p-1"
        title="Imprimir Ticket"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9v4a2 2 0 00-2 2v2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
      </button>

      {/* Contenido que SOLO se imprime */}
      <div className="hidden print:block fixed inset-0 bg-white p-4 text-black font-mono text-sm w-[80mm]">
        <div className="text-center border-b border-dashed pb-2 mb-2">
          <h2 className="text-lg font-bold">LAVADO DE AUTOS</h2>
          <p>Calle Falsa 123, Ciudad</p>
          <p>Tel: 555-1234</p>
        </div>

        <div className="space-y-1 mb-2">
          <p><span>Fecha:</span> {new Date(venta.createdAt).toLocaleString()}</p>
          <p><span>Ticket #:</span> {venta.id.toString().padStart(5, '0')}</p>
          <p><span>Atendió:</span> {venta.user?.name}</p>
        </div>

        <div className="border-b border-dashed mb-2 pb-2">
          <p className="font-bold uppercase">Cliente: {venta.cliente.nombre}</p>
          <p>Auto: {venta.auto.marca} - {venta.auto.placa}</p>
        </div>

        <div className="flex justify-between font-bold text-lg">
          <span>{venta.servicio.nombre}</span>
          <span>${Number(venta.total).toFixed(2)}</span>
        </div>

        {venta.contadorPromocion === 5 && (
          <p className="text-center font-bold mt-2 border-2 border-black p-1">
            ¡ESTE LAVADO FUE GRATIS! 🎁
          </p>
        )}

        <div className="text-center mt-6 border-t border-dashed pt-4">
          <p>Lavados acumulados: {venta.contadorPromocion}/5</p>
          <p className="mt-2">¡Gracias por su preferencia!</p>
        </div>
      </div>
    </>
  );
}