'use client'

import { motion } from 'framer-motion'
import { VehicleSVG } from '../../components/tipoAutos'
import { AutoStatus } from '../../actions/monitor/actions'

/*const stagePositionMap = {
  Lavado: 0,
  Interiores: 25,
  Secado: 50,
  Terminado: 80,
}*/
function calcularPosicion(
  orden: number,
  total: number,
  max = 92 // para que no se salga del carril
) {
  /*if (total <= 1) return 0
  return (orden / (total - 1)) * max*/
  if(orden == 1) return 0
  return ((max / (total - 1)) * (orden - 1) - 8)
}

function calcularPosicion2(
  orden: number,
  total: number,
  max = 90 // para que no se salga del carril
) {
  if(orden == 1) return 3
  return ((max / (total - 1)) * (orden - 1))
}


export default function Lane({ auto }: { auto: AutoStatus }) {
  const position = calcularPosicion(
    auto.etapaOrden,
    auto.totalEtapas
  )

  return (
    <motion.div
    layout
      className="relative h-32 bg-gray-800 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        x: 300,
        scale: 0.9,
      }}
      transition={{ duration: 0.6 }}
    >
      {/* Línea del carril */}
      <div className="absolute inset-x-0 top-1/2 h-1 bg-gray-700" />

      {/* Checkpoints */}
      {auto.etapas.map((etapa) => {
      const pos = calcularPosicion2(etapa.orden, auto.totalEtapas)

      const activa = etapa.orden <= auto.etapaOrden
      const actual = etapa.orden === auto.etapaOrden

      return (
        <motion.div
            layout
            initial={false}
            animate={{
              scale: actual ? 1.2 : 1,
            }}
            transition={{ 
    type: "spring", 
    stiffness: 300, // Rigidez: a mayor número, más rápido vuelve
    damping: 10     // Amortiguación: a menor número, más rebota
  }}
          key={etapa.id}
          className="absolute top-1/2 -translate-y-1/2 text-center pt-6"
          style={{ left: `${pos}%` }}
        >
          {/* Punto */}
          <div
            className={`w-3 h-3 rounded-full mx-auto ${
              activa ? 'bg-green-400' : 'bg-gray-500'
            }`}
          />

          {/* Texto */}
          <span
            className={`mt-1 block whitespace-nowrap text-xs ${
              activa ? 'text-green-300' : 'text-gray-400'
            } ${ actual ? 'pt-6.5 ' : '' } `}
          >
            {etapa.nombre}
          </span>
        </motion.div>
      )
      })}


      



      {/* Auto */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2"
        animate={{
          left: `${position}%`,
          scale: auto.etapa === 'Terminado' ? 1.05 : 1,
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
        style={{ width: 180 }}
      >
        <VehicleSVG
            tipo={auto.tipo}
            color={auto.color}
            etapa={auto.etapa}
        />
      </motion.div>
    </motion.div>
  )
}
