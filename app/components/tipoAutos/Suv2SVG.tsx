'use client'
import { motion, AnimatePresence  } from 'framer-motion'

type SuvSVGProps = {
  color: string
  //etapa: 'proceso' | 'enjabonado' | 'terminado'
  etapa: 'Lavado' | 'Interiores' | 'Secado'| 'Terminado'
}

export default function SuvSVG({ color, etapa }: SuvSVGProps) {
  return (
    <svg viewBox="0 0 500 900"
      className="w-full max-w-[500px] mx-auto">
      <motion.g
  animate={{
    y: etapa === 'Lavado' ? [0, -5, 0] : 0,
  }}
  transition={{
    repeat: etapa === 'Lavado' ? Infinity : 0,
    duration: 2,
  }}
  >
    <path d="M390.002,463.877c4.116-2.057,2.94-5.879,0-8.818c-2.94-2.94-1.177-8.818-5.88-17.344
				c-4.703-8.525-52.62-11.464-64.965-12.052c-12.343-0.587-34.105-15.872-48.215-27.043
				c-14.11-11.171-178.443-10.873-189.025-8.467c-10.582,2.407-20.592,33.169-22.944,43.165c-2.352,9.995,2.616,21.178-1.244,25.293
				c-3.859,4.115-2.374,12.374-1.786,15.314c0.587,2.939,43.933,7.289,43.933,7.289c-0.544-7.061,2.022-16.202,8.81-23.935
				c5.442-6.256,13.95-9.096,22.893-9.217c12.954-0.175,22.494,6.869,27.886,17.127c4.487,8.537,2.825,22.81,2.825,22.81h147.67
				c-0.063-8-0.815-10.883,1.413-17.637c4.137-12.539,15.589-22.055,29.406-22.055c11.12,0,22.543,4.639,27.627,13.689
				c1.318,1.813,2.451,4.03,3.083,5.668c3.131,8.098,1.172,17.996,1.172,17.996c19.107,0.883,19.401-7.658,20.007-11.186
				C393.273,470.947,390.002,463.877,390.002,463.877z"/>
			<path d="M74.19,445c0,0-1.504-10.781-3.667-13.133c-2.164-2.35-10.639-2.256-10.639-2.256
				S57.158,437,58.621,445H74.19z" fill='#EA3E14'/>
			<path d="M70.76,424.498c0,0,10.825-30.103,16.546-29.838c5.722,0.264,71.734-0.002,71.734-0.002
				s6.249-1.142,2.816,6.955c-3.433,8.098-8.362,26.142-14.786,25.966C140.645,427.402,68.294,427.843,70.76,424.498z" fill='#FAFCFB'/>
			<path d="M230.437,428.535l-1.704-31.174h-42.743c0,0-3.972,0.125-6.261,6.824
				c-2.16,6.318-7.259,22.528-7.831,24.35H230.437z" fill='#FAFCFB'/>
			<path d="M290.374,428.535c0.792-5.606-13.845-15.138-22.488-23.289
				c-9.294-8.766-37.371-7.695-37.371-7.695l1.768,30.984H290.374z" fill='#FAFCFB'/>
			<path d="M376.279,453.612c0,0-3.801,0.685-3.988-3.303c-0.186-3.987-1.121-8.971,3.552-9.22
				c4.672-0.25,9.884,0,9.884,0s2.967,7.912,2.967,11.79L376.279,453.612z" fill='#BDBDBD'/>
			<path d="M294.376,432.533c0,0-152.249-1.514-182.826,0.536" fill='#FAFCFB'/>
			<path d="M169.238,480.782c0,0,105.923,1.573,127.196-0.464" fill='#FAFCFB'/>
		    <path d="M381.054,503.629c0,2.665-70.336,4.825-157.101,4.825
			c-86.764,0-157.101-2.16-157.101-4.825c0-2.663,70.336-4.824,157.101-4.824C310.718,498.805,381.054,500.966,381.054,503.629z" fill='#1D1D1B' opacity="0.1"/>

            <ellipse transform="matrix(0.2269 -0.9739 0.9739 0.2269 -202.0275 703.0501)" cx="341.807" cy="478.773" rx="29.681" ry="29.681"/>
				
			<ellipse transform="matrix(0.9996 -0.0278 0.0278 0.9996 -13.167 9.6791)" fill='#FAFCFB' cx="341.807" cy="478.773" rx="20.032" ry="20.031"/>

            <path d="M354.112,478.741c0,6.814-5.524,12.338-12.338,12.338s-12.337-5.523-12.337-12.338
					c0-6.814,5.523-12.336,12.337-12.336S354.112,471.927,354.112,478.741z" fill='#BDBDBD'/>

            <ellipse transform="matrix(0.9949 -0.1006 0.1006 0.9949 -47.512 15.6712)" cx="131.577" cy="478.773" rx="29.681" ry="29.681"/>
				
			<ellipse transform="matrix(0.9997 -0.025 0.025 0.9997 -11.9293 3.4394)" fill='#FAFCFB' cx="131.577" cy="478.773" rx="20.032" ry="20.031"/>

            <path d="M143.882,478.741c0,6.814-5.524,12.338-12.338,12.338c-6.813,0-12.337-5.523-12.337-12.338
					c0-6.814,5.524-12.336,12.337-12.336C138.358,466.405,143.882,471.927,143.882,478.741z" fill='#BDBDBD'/>

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
        <SoapBubbles2 />
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

function SoapBubbles2() {
  return (
    <>
      <Bubble2 cx={190} cy={290} r={9} delay={0} />
      <Bubble2 cx={200} cy={290} r={8} delay={0.5} />
      <Bubble2 cx={210} cy={290} r={10} delay={1} />
      <Bubble2 cx={230} cy={290} r={9} delay={0} />
      <Bubble2 cx={250} cy={290} r={8} delay={0.5} />
      <Bubble2 cx={270} cy={290} r={11} delay={1} />

      <Bubble2 cx={220} cy={295} r={11} delay={1} />
      <Bubble2 cx={240} cy={300} r={10} delay={1} />
      <Bubble2 cx={260} cy={280} r={11} delay={1} />

      <Bubble2 cx={70} cy={290} r={9} delay={0} />
      <Bubble2 cx={80} cy={295} r={9} delay={0} />
      <Bubble2 cx={90} cy={285} r={9} delay={0} />
      <Bubble2 cx={100} cy={290} r={9} delay={0} />
      <Bubble2 cx={110} cy={295} r={9} delay={0} />

      <Bubble2 cx={370} cy={290} r={10} delay={0} />
      <Bubble2 cx={375} cy={295} r={10} delay={0} />
      <Bubble2 cx={380} cy={289} r={10} delay={0} />
    </>
  )
}

function SoapBubbles() {
  return (
    <>
      <Bubble cx={100} cy={230} r={8} delay={0} />
      <Bubble cx={140} cy={210} r={7} delay={0.5} />
      <Bubble cx={180} cy={220} r={9} delay={1} />
      <Bubble cx={220} cy={220} r={8} delay={0} />
      <Bubble cx={260} cy={200} r={6} delay={0.5} />
      <Bubble cx={300} cy={215} r={10} delay={1} />
      <Bubble cx={340} cy={215} r={7} delay={0.8} />
      <Bubble cx={380} cy={220} r={7} delay={0.8} />
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
      fill="#BBFCFC"
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

function Bubble2({
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
      fill="#BBFCFC"
      opacity={0.9}
      animate={{
        y: [-5, -8],
        opacity: [0.9, 0.6],
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