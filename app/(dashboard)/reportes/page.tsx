// app/reportes/page.tsx
'use client'
import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { FileBarChart, Calendar, ChevronDown } from 'lucide-react';
import { getDatosVentas } from '../../actions/reportes/actions';

export default function ReportesPage() {
  const [reporteSeleccionado, setReporteSeleccionado] = useState('ventas');
  const [filtroTiempo, setFiltroTiempo] = useState<'15dias' | 'meses'>('15dias');
  const [datos, setDatos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Una vez montado el componente, activamos la gráfica
    cargarDatos();
  }, [reporteSeleccionado, filtroTiempo]);

  const cargarDatos = async () => {
    setLoading(true);
    try {
      const res = await getDatosVentas(filtroTiempo);
      console.log("Datos recibidos:", res); // Revisa en la consola si llegan datos
      setDatos(res);
    } catch (error) {
      console.error("Error cargando datos:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FileBarChart className="text-blue-600" /> Panel de Reportes
            </h1>
            <p className="text-gray-500 text-sm">Analiza el rendimiento de tu negocio</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {/* Selector de Tipo de Reporte (Escalable) */}
            <div className="relative">
              <select
                value={reporteSeleccionado}
                onChange={(e) => setReporteSeleccionado(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 text-sm font-medium shadow-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              >
                <option value="ventas">Reporte de Ventas</option>
                {/* Futuros reportes aquí: <option value="clientes">Nuevos Clientes</option> */}
              </select>
              <ChevronDown className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" size={16} />
            </div>

            {/* Selector de Periodo */}
            <div className="flex bg-white border border-gray-200 rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setFiltroTiempo('15dias')}
                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${filtroTiempo === '15dias' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                Últimos 15 días
              </button>
              <button
                onClick={() => setFiltroTiempo('meses')}
                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${filtroTiempo === 'meses' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                Por Meses
              </button>
            </div>
          </div>
        </header>

        {/* Contenedor de Gráfica */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-h-[450px] flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-700">Ingresos Totales ($)</h3>
            <div className="text-xs text-gray-400 flex items-center gap-1">
              <Calendar size={14} /> 
              {filtroTiempo === '15dias' ? 'Vista diaria' : 'Vista mensual'}
            </div>
          </div>

          <div className="w-full h-[400px]">
            {loading ? (
              <div className="h-full w-full flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            ) : datos.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={datos}>
                  <defs>
                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fontSize: 12, fill: '#9ca3af'}}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fontSize: 12, fill: '#9ca3af'}}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip 
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                    formatter={(value: any) => [`$${value?.toLocaleString() || 0}`, 'Ingresos']}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="total" 
                    stroke="#2563eb" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorTotal)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full w-full flex items-center justify-center text-gray-400">
                No hay datos disponibles para este periodo
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}