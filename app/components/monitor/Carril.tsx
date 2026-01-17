'use client'

import { motion } from 'framer-motion'
import { VehicleSVG } from '../../components/tipoAutos'
import { AutoStatus } from '../../actions/monitor/actions'

const stagePositionMap = {
  Lavado: 0,
  Interiores: 25,
  Secado: 50,
  Terminado: 80,
}

export default function Lane({ auto }: { auto: AutoStatus }) {
  const position = stagePositionMap[auto.etapa]

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
