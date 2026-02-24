'use client'
import { motion, AnimatePresence  } from 'framer-motion'

type SuvSVGProps = {
  color: string
  //etapa: 'proceso' | 'enjabonado' | 'terminado'
  etapa: 'Lavado' | 'Interiores' | 'Secado'| 'Terminado'  | 'Mojado' | 'Enjabonado' | 'Enjuague'  | 'En espera'
}

export default function PickupSVG({ color, etapa }: SuvSVGProps) {
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
    <g transform="translate(-850, -470) scale(2.7)">
        <path d="M344.1,286.277h116.247c0.673-0.491,1.12-1.241,1.12-2.393c0-2.98,0.157-6.274-1.098-6.431v-5.097
				c0-3.764-2.823-3.058-2.823-3.058s-0.157-1.098-2.039-2.823c-3.607-0.784-24.468-2.196-24.468-2.196s-9.615-11.673-12.518-15.769
				c-1.098-1.725-24.163-1.352-24.163-1.352c-0.282,0.647-0.247,17.164-0.247,17.164c-4.563,0-53.309,0.899-53.309,0.899
				c-1.17,6.975-0.744,13.33-1.098,13.33c-0.784,0,0.157,6.587,0.157,6.587S341.684,285.731,344.1,286.277z" fill={color}/>				
				<path d="M396.707,249.563c11.052,0.192,19.081,0.475,20.278,0.668c2.53,3.493,7.937,10.476,10.417,13.665
					l-30.695,0.038V249.563z" fill='#2D2D2D'/>
			  <path d="M397.211,250.075c10.98,0.196,17.929,0.455,19.494,0.626c2.321,3.19,6.804,9.002,9.67,12.692
				l-29.164,0.036V250.075z" fill='#F5F6FA'/>
        <path d="M425.003,286.116c0.237-0.018,0.385-0.239,0.396-0.259l2.685-9.204
					c0.094-0.162,1.129-1.233,1.258-1.384c0.382-0.287,2.172-0.682,2.517-1.007c0.66-0.4,2.088,0,2.768,0l9.837,0.995
					c1.299,0,2.879,0.912,3.529,2.038l4.988,8.64c2.101-0.279,6.191,1.293,6.191,1.293l-19.068,5.564l-19.102-5.477
					C421.009,287.284,424.997,286.149,425.003,286.116z M381.09,285.982c-0.004,0-0.01-0.001-0.014-0.001
					c-0.018-0.002-0.033-0.004-0.048-0.005c-0.044-0.005-0.081-0.01-0.11-0.015c-0.011-0.002-0.024-0.004-0.033-0.006
					c-0.031-0.007-0.053-0.014-0.057-0.02l-4.988-8.64c-0.65-1.125-2.23-2.038-3.529-2.038l-11.039-0.995
					c-1.299,0-4.006,1.907-4.656,3.033l-4.781,7.914c-0.013,0.022,1.945,0.772,1.911,0.797c-0.033,0.025-0.076,0.053-0.127,0.081
					l-13.241,0.901l26.944,6.117l27.455-7.528C394.763,285.543,381.103,286.017,381.09,285.982z" fill='#2D2D2D'/>
							
				<path d="M352.783,287.46l5.058-10.164c0.555-1.125,2.058-2.038,3.358-2.038h9.976
					c1.299,0,2.956,0.912,3.7,2.038l5.714,8.64c0.246,0.371,44.962,0.371,45.145,0l4.262-8.64c0.555-1.125,2.058-2.038,3.358-2.038
					h9.976c1.299,0,2.956,0.912,3.7,2.038l5.714,8.64c0.246,0.371,6.299,1.293,6.299,1.293c1.003-0.461,1.685-1.273,1.564-2.706
					c-0.018-0.221-0.036-0.445-0.053-0.668h-5.926l-5.272-7.97c-1.322-1.998-3.956-3.449-6.264-3.449h-9.976
					c-2.308,0-4.698,1.451-5.684,3.449l-3.931,7.97h-41.028l-5.272-7.97c-1.322-1.998-3.956-3.449-6.264-3.449h-9.976
					c-2.308,0-4.698,1.451-5.684,3.449l-3.931,7.97h-12.638c0.221,1.08,0.699,3.605,0.699,3.605s1.888,0.691,5.379,1.293
					C344.784,288.753,352.6,287.831,352.783,287.46z" fill={color}/>
				
			  <circle cx="367.321" cy="287.931" r="10.979" fill="#242424" />

        <circle cx="367.321" cy="287.931" r="5.489" fill="#7F8085" />
				
        <circle cx="439.732" cy="287.931" r="10.979" fill="#242424" />
        <circle cx="439.732" cy="287.931" r="5.489" fill="#7F8085" />
			
				<path d="M425.794,286.052c0,0.477-0.386,0.863-0.863,0.863h-43.899c-0.477,0-0.863-0.386-0.863-0.863l0,0
					c0-0.476,0.386-0.863,0.863-0.863h43.899C425.408,285.19,425.794,285.576,425.794,286.052L425.794,286.052z" fill='#B2B2B2'/>
				<path d="M425.77,285.857c-0.089-0.382-0.429-0.668-0.838-0.668h-43.899c-0.409,0-0.75,0.285-0.839,0.668
					H425.77z" fill='#FFFFFF'/>
				<path d="M380.325,286.542c0.155,0.225,0.413,0.373,0.707,0.373h43.899c0.294,0,0.552-0.148,0.707-0.373
					H380.325z" fill='#939393'/>
        <path d="M402.934,265.954c-0.01-0.167-0.145-0.3-0.314-0.3h-5.133c-0.17,0-0.307,0.135-0.315,0.303
					h-0.003v0.015v0.642v0.589c0,0.176,0.143,0.318,0.318,0.318h5.133c0.176,0,0.318-0.142,0.318-0.318v-0.589v-0.642v-0.019
					C402.936,265.954,402.935,265.954,402.934,265.954z M397.486,265.781h5.133c0.105,0,0.191,0.086,0.191,0.191v0.642
					c0,0.105-0.086,0.191-0.191,0.191h-5.133c-0.105,0-0.191-0.086-0.191-0.191v-0.642
					C397.295,265.867,397.381,265.781,397.486,265.781z M402.619,267.394h-5.133c-0.105,0-0.191-0.086-0.191-0.191v-0.341
					c0.054,0.041,0.118,0.07,0.191,0.07h5.133c0.073,0,0.137-0.029,0.191-0.07v0.341
					C402.81,267.308,402.724,267.394,402.619,267.394z" fill='#BF0C0C'/>
			
			  <path d="M343.855,278.57l0.38-5.862l-4.487,0.1c-0.358,0.698-0.377,3.585-0.331,5.861L343.855,278.57z" fill='#7F374D'/>
			  <path d="M344.145,274.095l0.2-3.092l-4.486,0.1c-0.219,0.427-0.311,1.672-0.339,3.095L344.145,274.095z" fill='#70221E'/>
			  <path d="M454.572,269.431v-0.354c0-0.52-0.421-0.941-0.941-0.941h-3.451c-0.52,0-0.941,0.421-0.941,0.941
				v0.354H454.572z" fill='#E37333'/>
			  <path d="M459.752,277.623l0.463-0.008c0.681-0.012,1.194-0.634,1.147-1.391l-0.315-5.023
				c-0.047-0.757-0.638-1.36-1.318-1.349l-0.463,0.008L459.752,277.623z" fill='#C2C2BC'/>
			
				<path d="M428.212,263.366c-0.169,2.452-2.004,1.821-2.886,1.784c-0.882-0.038-1.126-0.837-1.019-1.885
					c0.151-1.477,0.696-1.941,1.578-1.904C426.768,261.398,428.357,261.265,428.212,263.366z" fill='#200000'/>
    </g>
      {/* Efecto de Reflejo de Agua (Mojado) */}
        {etapa === 'Mojado' && <WetReflections />}

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