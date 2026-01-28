'use client'
import { motion, AnimatePresence  } from 'framer-motion'

type SuvSVGProps = {
  color: string
  //etapa: 'proceso' | 'enjabonado' | 'terminado'
  etapa: 'Lavado' | 'Interiores' | 'Secado'| 'Terminado'
}

export default function SuvSVG({ color, etapa }: SuvSVGProps) {
  return (
    <svg viewBox="0 0 500 550"
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
  <path d="M383.824,269.229c-1.546-1.03-3.78-7.387-7.043-14.43c-3.263-7.043-71.625-14.255-83.132-14.255
				c-11.507,0-45.176-30.233-98.078-30.061c-52.901,0.171-61.325,21.121-91.382,23.697c-30.057,2.576-29.215,3.596-30.073,7.89
				c-0.859,4.294-3.124,20.417-9.307,25.57c-6.184,5.153,0.451,20.567,2.168,25.205c1.369,3.697,23.174,5.374,31.959,5.902
				c-0.145-1.233-0.227-2.484-0.227-3.756c0-17.644,14.303-31.947,31.947-31.947c17.644,0,31.947,14.527,31.947,32.171
				c0,2.605-0.319,4.783-0.907,7.783h57.587l82.626,0.932c-0.784-2.771-1.213-5.804-1.213-8.826
				c0-17.644,14.303-32.003,31.947-32.003c10.128,0,19.149,4.69,25.002,12.043c0.024,0.028,0.05,0.042,0.074,0.07
				c0.715,0.849,1.332,1.732,1.878,2.646c3.156,4.954,4.992,10.826,4.992,17.135c0,2.654-0.329,5.229-0.939,7.693
				c5.445,0.332,17.341-1.576,20.175-4.261C387.088,295.337,385.37,270.26,383.824,269.229z" fill={color}/>

  <path d="M75.006,256h6.183c0,0,8.352-8.615,7.351-10.317c-1.001-1.702-9.511-0.714-9.511-0.714
				l-5.415,0.355L71.285,256H75.006z" fill='#EE3E38'/>
			<path d="M208.035,240.665c0.11-0.432-1.883-26.096-1.883-26.096s-25.802-0.971-38.759,3.234
				c-12.957,4.206-31.229,16.823-32.226,19.087L208.035,240.665z" fill='#FAFCFB'/>
			<path  d="M210.581,240.665l-2.52-25.968c0,0,21.655,0.644,41.523,10.618
				c15.405,7.733,30.985,18.37,31.428,18.586C281.456,244.116,210.581,240.665,210.581,240.665z" fill='#FAFCFB'/>
			<path d="M171.604,293.906c0,0,104.078,4.028,120.53,0" fill='#FAFCFB'/>
  <path d="M160.541,293.962c0,16.393-13.288,29.681-29.681,29.681c-16.393,0-29.681-13.288-29.681-29.681
					s13.289-29.681,29.681-29.681C147.253,264.281,160.541,277.569,160.541,293.962z"/>
  <path d="M150.892,293.962c0,11.064-8.968,20.031-20.031,20.031c-11.064,0-20.032-8.967-20.032-20.031
					c0-11.063,8.968-20.032,20.032-20.032C141.924,273.931,150.892,282.899,150.892,293.962z" fill='#FAFCFB'/>
  <path d="M143.165,293.93c0,6.814-5.524,12.337-12.338,12.337c-6.814,0-12.337-5.523-12.337-12.337
					c0-6.814,5.523-12.337,12.337-12.337C137.641,281.593,143.165,287.116,143.165,293.93z" fill='#BDBDBD'/>
  <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -110.6177 321.5583)" cx="332.846" cy="294.306" rx="29.681" ry="29.681"/>

  <path d="M352.878,294.307c0,11.064-8.968,20.031-20.032,20.031c-11.063,0-20.032-8.967-20.032-20.031
					c0-11.063,8.969-20.032,20.032-20.032C343.91,274.274,352.878,283.244,352.878,294.307z" fill='#FAFCFB'/>

  <path d="M345.151,294.274c0,6.814-5.524,12.337-12.338,12.337c-6.813,0-12.337-5.523-12.337-12.337
					c0-6.814,5.524-12.337,12.337-12.337C339.627,281.938,345.151,287.46,345.151,294.274z" fill='#BDBDBD'/>
  <path d="M369.727,267.022c-0.114-0.062-16.982-11.185-14.043-11.389c2.939-0.205,9.471,1.919,9.471,1.061
				c0-0.857,1.919-1.633,4.368,0c2.449,1.632,11.634,9.43,11.063,10.736C380.014,268.736,371.932,268.206,369.727,267.022z" fill='#828483'/>
			<path d="M282.227,246.612c0,0-122.856-7.71-147.649-6.907" fill='#FAFCFB'/>
  <ellipse cx="223.953" cy="319.163" rx="157.101" ry="4.825" fill='#1D1D1B' opacity="0.1"/>
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
