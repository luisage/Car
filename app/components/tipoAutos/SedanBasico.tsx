'use client'
import { motion, AnimatePresence  } from 'framer-motion'

type SedanSVGProps = {
  color: string
  //etapa: 'proceso' | 'enjabonado' | 'terminado'
  etapa: 'Lavado' | 'Interiores' | 'Secado'| 'Terminado'
}

export default function SedanSVG({ color, etapa }: SedanSVGProps) {
  return (
    <svg
      viewBox="0 0 600 300"
      className="w-full max-w-[500px] mx-auto"
    >
      {/* Sombra */}
      <ellipse
        cx="300"
        cy="230"
        rx="220"
        ry="20"
        fill="#000"
        opacity="0.1"
      />
      <motion.g
  animate={{
    y: etapa === 'Lavado' ? [0, -2, 0] : 0,
  }}
  transition={{
    repeat: etapa === 'Lavado' ? Infinity : 0,
    duration: 2,
  }}
>

      {/* Carrocería */}
      <path
        d="
          M90 190
          L130 150
          Q150 130 210 130
          L360 130
          Q420 130 450 150
          L500 180
          L520 190
          Z
        "
        fill={color}
      />
      <motion.path
  d="
    M90 190
    L130 150
    Q150 130 210 130
    L360 130
    Q420 130 450 150
    L500 180
    L520 190
    Z
  "
  fill="white"
  opacity={0.0}
  animate={{
    opacity: etapa === 'Terminado' ? 0.15 : 0,
  }}
  transition={{ duration: 0.6 }}
/>


      {/* Techo */}
      <path
        d="
          M200 130
          L240 90
          L360 90
          L400 130
          Z
        "
        fill={shade(color, -20)}
      />

      {/* Ventanas */}
      <path
        d="M215 125 L250 95 L350 95 L385 125 Z"
        fill="#cfe8f5"
      />

      {/* Ruedas */}
      <Wheel x={180} y={200} />
      <Wheel x={420} y={200} />
      </motion.g>

      {/* Efectos */}
      <AnimatePresence mode="wait">
  {etapa === 'Lavado' && (
    <motion.g
      key="soap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SoapBubbles />
    </motion.g>
  )}

  {etapa === 'Terminado' && (
    <motion.g
      key="clean"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Sparkles />
    </motion.g>
  )}
</AnimatePresence>

    </svg>
  )
}

function Wheel({ x, y }: { x: number; y: number }) {
  return (
    <>
      <circle cx={x} cy={y} r="28" fill="#333" />
      <circle cx={x} cy={y} r="14" fill="#666" />
    </>
  )
}

function SoapBubbles() {
  return (
    <>
      <Bubble cx={180} cy={120} r={8} delay={0} />
      <Bubble cx={220} cy={120} r={8} delay={0} />
      <Bubble cx={260} cy={100} r={6} delay={0.5} />
      <Bubble cx={300} cy={115} r={10} delay={1} />
      <Bubble cx={340} cy={105} r={7} delay={0.8} />
      <Bubble cx={380} cy={105} r={7} delay={0.8} />
    </>
  )
}

function Sparkles() {
  return (
    <>
      <polygon
        points="260,80 265,95 280,100 265,105 260,120 255,105 240,100 255,95"
        fill="#fffacd"
      />
      <polygon
        points="340,70 345,85 360,90 345,95 340,110 335,95 320,90 335,85"
        fill="#fffacd"
      />
    </>
  )
}

function shade(color: string, percent: number) {
  const num = parseInt(color.replace('#', ''), 16)
  const r = Math.min(255, Math.max(0, (num >> 16) + percent))
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0xff) + percent))
  const b = Math.min(255, Math.max(0, (num & 0xff) + percent))

  return `rgb(${r}, ${g}, ${b})`
}

function Bubble({
  cx,
  cy,
  r,
  delay,
}: {
  cx: number
  cy: number
  r: number
  delay: number
}) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={r}
      fill="white"
      opacity={0.7}
      animate={{
        y: [-5, -30],
        opacity: [0.7, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay,
        ease: 'easeOut',
      }}
    />
  )
}
