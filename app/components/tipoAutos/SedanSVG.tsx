'use client'
import { motion, AnimatePresence  } from 'framer-motion'

type SuvSVGProps = {
  color: string
  //etapa: 'proceso' | 'enjabonado' | 'terminado'
  etapa: 'Lavado' | 'Interiores' | 'Secado'| 'Terminado'  | 'Mojado' | 'Enjabonado' | 'Enjuague'  | 'En espera'
}

export default function SuvSVG({ color, etapa }: SuvSVGProps) {
  return (
    <svg viewBox="0 0 500 550"
      className="w-full max-w-[500px] mx-auto">
      <motion.g
  animate={{
    y: etapa === 'Lavado' || etapa === 'Mojado' ? [0, -5, 0] : 0,
  }}
  transition={{
    repeat: etapa === 'Lavado' || etapa === 'Mojado' ? Infinity : 0,
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

      {/* Efecto de Reflejo de Agua (Mojado) */}
        {etapa === 'Mojado' && <WetReflections />}

  <ellipse cx="223.953" cy="319.163" rx="157.101" ry="4.825" fill='#3f4d3f' opacity="0.1"/>
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

    {etapa === 'Mojado' && (
          <motion.g key="wet" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <WaterDroplets />
          </motion.g>
        )}

    {etapa === 'Enjuague' && (
    <motion.g 
      key="rinse" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
    >
      <RinseWater />
      <WaterSplashes />
      <FadingBubbles />
      {/* Reutilizamos el efecto de escurrimiento que creamos para Mojado */}
      <WaterDroplets /> 
    </motion.g>
  )}

    {etapa === 'Secado' && (
    <motion.g 
      key="drying" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
    >
      <AirGusts />
      <DryingVapor />
    </motion.g>
    )}

    {etapa === 'Interiores' && (
  <motion.g 
    key="interiors-stage" 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
  >
    {/* Efecto de luz azulada en los vidrios */}
    <InteriorGlow />
    
    {/* NUEVO: Brillos parpadeantes en las ventanas */}
    <WindowGlimmers />
    
    {/* Efecto de limpieza (barrido blanco) */}
    <motion.path
      d="M140,240 Q180,220 250,230"
      fill="none"
      stroke="white"
      strokeWidth="12"
      strokeLinecap="round"
      opacity="0.2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ 
        pathLength: [0, 1], 
        opacity: [0, 0.3, 0],
        x: [0, 20] 
      }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    </motion.g>
    )}
  
    {etapa === 'Terminado' && (
    <motion.g
      key="finished-stage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* 1. El guiño de los faros */}
      <HeadlightGlow />

      {/* 2. Tus estrellas de brillo (Sparkles) */}
      <Sparkles />

      {/* 3. Un brillo extra que recorre la carrocería de vez en cuando */}
      <motion.path
        d="M80,260 Q200,250 380,270"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: [0, 1], opacity: [0, 0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      />
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

function WetReflections() {
  return (
    <g opacity="0.4">
      {/* Manchas de agua sobre el techo y cofre */}
      <path d="M120,245 Q160,235 200,245 T280,245" fill="none" stroke="#4FC3F7" strokeWidth="4" strokeLinecap="round" />
      <path d="M320,260 Q340,255 360,265" fill="none" stroke="#4FC3F7" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="223.953" cy="330.163" rx="157.101" ry="7.825" fill='#05a9f5'/>
    </g>
  )
}

function WaterDroplets() {
  const drops = [
    { x: 100, y: 260, delay: 0 },
    { x: 150, y: 280, delay: 0.5 },
    { x: 220, y: 270, delay: 1.2 },
    { x: 280, y: 275, delay: 0.2 },
    { x: 350, y: 265, delay: 0.8 },
    { x: 180, y: 250, delay: 1.5 },
  ]

  return (
    <g>
      {drops.map((drop, i) => (
        <motion.path
          key={i}
          d={`M ${drop.x} ${drop.y} Q ${drop.x - 2} ${drop.y + 5} ${drop.x} ${drop.y + 10}`}
          stroke="#4FC3F7"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [0, 15] 
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: drop.delay,
            ease: "easeIn"
          }}
        />
      ))}
    </g>
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

function AirGusts() {
  const gusts = [
    { x: 80, y: 220, w: 40, delay: 0 },
    { x: 150, y: 240, w: 60, delay: 0.3 },
    { x: 250, y: 210, w: 50, delay: 0.6 },
    { x: 100, y: 270, w: 45, delay: 0.2 },
    { x: 300, y: 250, w: 55, delay: 0.5 },
  ]

  return (
    <g>
      {gusts.map((g, i) => (
        <motion.line
          key={i}
          x1={g.x} y1={g.y} x2={g.x + g.w} y2={g.y}
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ x: -20, opacity: 0 }}
          animate={{ 
            x: [0, 100], 
            opacity: [0, 1, 0] 
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: g.delay,
            ease: "linear"
          }}
        />
      ))}
    </g>
  )
}

function DryingVapor() {
  const particles = Array.from({ length: 8 })
  return (
    <g>
      {particles.map((_, i) => (
        <motion.circle
          key={i}
          r={Math.random() * 3 + 5}
          fill="white"
          initial={{ 
            x: 100 + Math.random() * 250, 
            y: 220 + Math.random() * 50, 
            opacity: 0 
          }}
          animate={{ 
            y: "-=30", 
            opacity: [0, 0.4, 0],
            scale: [1, 1.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}
    </g>
  )
}

function RinseWater() {
  const streams = Array.from({ length: 15 });
  return (
    <g>
      {streams.map((_, i) => {
        const xPos = 80 + i * 22;
        // Definimos una altura de impacto variable según la forma del SUV
        const impactY = xPos > 160 && xPos < 320 ? 215 : 240; 

        return (
          <motion.line
            key={i}
            x1={xPos}
            y1={120}
            x2={xPos - 2}
            y2={impactY}
            stroke="#4FC3F7"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1], 
              opacity: [0, 0.6, 0] 
            }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              delay: i * 0.05,
              ease: "linear"
            }}
          />
        );
      })}
    </g>
  );
}

function FadingBubbles() {
  // Reutilizamos la lógica de burbujas pero con menos cantidad y más transparencia
  return (
    <motion.g animate={{ opacity: [0.6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
       <Bubble cx={150} cy={220} r={6} delay={0} />
       <Bubble cx={250} cy={210} r={5} delay={0.5} />
       <Bubble cx={320} cy={215} r={7} delay={1} />
    </motion.g>
  );
}
function WaterSplashes() {
  // Puntos estratégicos donde el agua golpea el auto
  const splashPoints = [
    { x: 130, y: 240 }, // Cofre
    { x: 180, y: 215 }, // Techo frente
    { x: 250, y: 215 }, // Techo centro
    { x: 320, y: 235 }, // Parte trasera
  ];

  return (
    <g>
      {splashPoints.map((point, i) => (
        <g key={i}>
          {/* Creamos 3 partículas por cada punto de impacto */}
          {[...Array(3)].map((_, j) => (
            <motion.circle
              key={j}
              r="2"
              fill="#4FC3F7"
              initial={{ x: point.x, y: point.y, opacity: 0 }}
              animate={{
                x: [point.x, point.x + (j - 1) * 10], // Salta hacia los lados
                y: [point.y, point.y - 15, point.y - 5], // Salta hacia arriba y cae
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: j * 0.1 + i * 0.2,
                ease: "easeOut"
              }}
            />
          ))}
        </g>
      ))}
    </g>
  );
}

function InteriorCleaning() {
  return (
    <g>
      {/* Spray inicial (partículas rápidas) */}
      {[...Array(5)].map((_, i) => (
        <motion.circle
          key={`spray-${i}`}
          r="2"
          fill="#E0F7FA"
          initial={{ x: 170, y: 230, opacity: 0 }}
          animate={{ 
            x: [170, 210], 
            y: [230, 220 + i * 5], 
            opacity: [0, 1, 0],
            scale: [0.5, 1.5]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}

      {/* Brillo que recorre las ventanas */}
      <motion.path
        d="M140,240 L200,220 L270,240" // Trayectoria sobre los vidrios
        fill="none"
        stroke="white"
        strokeWidth="15"
        strokeLinecap="round"
        opacity="0.3"
        initial={{ pathLength: 0, x: -20 }}
        animate={{ 
          pathLength: [0, 1, 0],
          x: [0, 50, 100],
          opacity: [0, 0.4, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </g>
  );
}

function InteriorGlow() {
  return (
    <motion.g
      animate={{ opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      {/* Luz interna en las ventanas traseras y delanteras */}
      <path d="M208.035,240.665c0.11-0.432-1.883-26.096-1.883-26.096s-25.802-0.971-38.759,3.234
        c-12.957,4.206-31.229,16.823-32.226,19.087L208.035,240.665z" fill="#81D4FA" />
      <path d="M210.581,240.665l-2.52-25.968c0,0,21.655,0.644,41.523,10.618
        c15.405,7.733,30.985,18.37,31.428,18.586C281.456,244.116,210.581,240.665,210.581,240.665z" fill="#B3E5FC" />
    </motion.g>
  );
}

function WindowGlimmers() {
  // Coordenadas aproximadas de las ventanas del SUV
  const glimmerPoints = [
    { x: 150, y: 225 }, // Ventana delantera
    { x: 180, y: 220 }, // Ventana delantera (parte alta)
    { x: 230, y: 225 }, // Ventana trasera
    { x: 260, y: 230 }, // Ventana trasera (atrás)
  ];

  return (
    <g>
      {glimmerPoints.map((point, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0], 
            scale: [0, 1.2, 0],
            rotate: [0, 45, 90] 
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.4, // Aparecen de forma escalonada
            ease: "easeInOut"
          }}
          style={{ originX: `${point}px`, originY: `${i}px` }}
        >
          {/* Forma de estrella/brillo (dos líneas cruzadas) */}
          <line x1={point.x - 5} y1={point.y} x2={point.x + 5} y2={point.y} stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1={point.x} y1={point.y - 5} x2={point.x} y2={point.y + 5} stroke="white" strokeWidth="2" strokeLinecap="round" />
        </motion.g>
      ))}
    </g>
  );
}
function HeadlightGlow() {
  return (
    <g>
      {/* Luz del faro principal (izquierda en el dibujo, que es el frente) */}
      <motion.circle
        cx="65" 
        cy="255" 
        r="12"
        fill="#FFF9C4"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: [0, 0.8, 0.2, 0.8, 0], // Simula parpadeo "guiño"
          scale: [0.5, 1.5, 1.2, 1.5, 0.5] 
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 2, // Espera 2 segundos antes de volver a parpadear
        }}
        style={{ filter: 'blur(4px)' }} // Efecto de resplandor
      />
      
      {/* Punto de brillo intenso en el centro del faro */}
      <motion.circle
        cx="65"
        cy="255"
        r="4"
        fill="white"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
      />
    </g>
  );
}