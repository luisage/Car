// app/HomeClient.tsx
'use client'
import { useState, useEffect } from 'react';
import { Store, Info, Bell, Droplets, ChevronLeft, ChevronRight, MapPin, Phone, Clock } from 'lucide-react';

interface Props {
  servicios: any[];
  noticias: any[];
}

export default function HomeClient({ servicios, noticias }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Estado para pausar al hacer hover
  
  // Puedes manejar estas imágenes desde el sistema de archivos o una tabla después
  const imagenesCarrusel = [
    "/imagenCarrusel/OIP.webp", 
    "/imagenCarrusel/OIP.jpg",
    "/imagenCarrusel/OIP2.jpg"
  ];

  // Lógica de paso automático
  useEffect(() => {
    // Si el usuario tiene el mouse encima, no se mueve
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === imagenesCarrusel.length - 1 ? 0 : prev + 1));
    }, 5000); // Cambia cada 5 segundos (ajustable)

    return () => clearInterval(interval); // Limpiamos el intervalo al desmontar
  }, [isPaused, imagenesCarrusel.length]);

  return (
    <div className="min-h-screen bg-slate-50/50 pb-12">
      {/* SECCIÓN: HEADER / LOGO */}
      <section className="bg-slate-900 text-white py-12 px-8 relative overflow-hidden rounded-3xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center p-4 shadow-2xl rotate-3">
             <Store size={64} className="text-blue-600" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-black mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              CAR WASH PRO
            </h1>
            <p className="text-slate-400 text-lg flex items-center justify-center md:justify-start gap-2 italic">
              <Info size={20} className="text-blue-400" /> "Excelencia en cada detalle, brillo en cada rincón"
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-8 pt-16 -mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* COLUMNA IZQUIERDA Y CENTRO */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* CARRUSEL */}
          <div className="relative h-72 md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl group"
          onMouseEnter={() => setIsPaused(true)}  // Pausa al entrar
            onMouseLeave={() => setIsPaused(false)} // Reanuda al salir
            >
            {imagenesCarrusel.map((img, index) => (
              <img 
                key={index}
                src={img} 
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                }`} 
                alt={`Slide ${index}`} 
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => setCurrentSlide(prev => (prev === 0 ? imagenesCarrusel.length - 1 : prev - 1))} className="p-3 bg-white/10 backdrop-blur-xl rounded-full text-white border border-white/20 hover:bg-white/30 transition-all"><ChevronLeft/></button>
              <button onClick={() => setCurrentSlide(prev => (prev === imagenesCarrusel.length - 1 ? 0 : prev + 1))} className="p-3 bg-white/10 backdrop-blur-xl rounded-full text-white border border-white/20 hover:bg-white/30 transition-all"><ChevronRight/></button>
            </div>
            {/* Indicadores de puntos (Dots) en la parte inferior */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {imagenesCarrusel.map((_, i) => (
                <div 
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === i ? 'w-8 bg-blue-500' : 'w-2 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* SERVICIOS DESDE LA BASE DE DATOS */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black text-slate-800 flex items-center gap-3">
                <Droplets className="text-blue-600" size={32} /> Catálogo
              </h2>
              <div className="h-1 flex-1 mx-4 bg-slate-200 rounded-full hidden md:block"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicios.map((s) => (
                <div key={s.id} className="group p-6 bg-white border border-slate-200 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Droplets size={24} />
                    </div>
                    <span className="text-2xl font-black text-slate-800">
                      ${s.costo}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{s.nombre}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.descripcion || 'Servicio profesional garantizado.'}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* COLUMNA DERECHA */}
        <aside className="space-y-8">
          {/* NOTICIAS DESDE LA BASE DE DATOS */}
          <section className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[2.5rem] p-8 text-white shadow-xl">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Bell size={24} className="animate-bounce" /> Novedades
            </h2>
            <div className="space-y-6">
              {noticias.length > 0 ? noticias.map((n) => (
                <div key={n.id} className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-base mb-1">{n.titulo}</h4>
                  <p className="text-sm text-blue-100 leading-snug">{n.descripcion}</p>
                </div>
              )) : (
                <p className="text-sm text-blue-200 italic">No hay noticias recientes.</p>
              )}
            </div>
          </section>

          {/* INFORMACIÓN DEL ESTABLECIMIENTO */}
          <section className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-6">Ubicación</h2>
            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-slate-100 rounded-lg text-slate-500"><MapPin size={20}/></div>
                <p className="text-sm text-slate-600">Av. Las Torres #450, Col. Centro, CP 54000</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-slate-100 rounded-lg text-slate-500"><Phone size={20}/></div>
                <p className="text-sm text-slate-600">+52 (55) 1234-5678</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-slate-100 rounded-lg text-slate-500"><Clock size={20}/></div>
                <div className="text-sm text-slate-600">
                  <p className="font-bold text-slate-800">Lun - Sáb</p>
                  <p>08:00 AM - 07:00 PM</p>
                </div>
              </div>
            </div>
          </section>
        </aside>

      </div>
    </div>
  );
}