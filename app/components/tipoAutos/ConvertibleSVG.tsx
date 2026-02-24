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
  
<path d="M168.955,227.531c0,0,82.774,3.343,83.401,3.553c0.627,0.209,19.646,12.123,19.646,12.123
        l-35.95,7.106l-59.149-3.135L168.955,227.531z" fill={color}/>


<path d="M143.789,289.69c0,17.718-14.36,32.076-32.076,32.076c-17.716,0-32.076-14.358-32.076-32.076
            c0-17.714,14.36-32.075,32.076-32.075C129.428,257.615,143.789,271.977,143.789,289.69z"/>
<path d="M133.36,289.69c0,11.957-9.691,21.647-21.647,21.647c-11.956,0-21.648-9.69-21.648-21.647
            c0-11.956,9.692-21.647,21.648-21.647C123.669,268.043,133.36,277.734,133.36,289.69z" fill='#FAFCFB'/>
<path d="M125.011,289.655c0,7.365-5.97,13.334-13.333,13.334c-7.364,0-13.332-5.969-13.332-13.334
            c0-7.363,5.969-13.331,13.332-13.331C119.04,276.324,125.011,282.292,125.011,289.655z" fill='#BDBDBD'/>
<path d="M118.229,289.655c0,3.62-2.934,6.554-6.552,6.554c-3.619,0-6.552-2.934-6.552-6.554
            c0-3.618,2.933-6.554,6.552-6.554C115.296,283.102,118.229,286.037,118.229,289.655z" fill='#BDBDBD' opacity="0.2"/>


<path d="M358.141,290.722c0,17.717-14.36,32.075-32.076,32.075c-17.716,0-32.076-14.358-32.076-32.075
            c0-17.715,14.36-32.076,32.076-32.076C343.781,258.646,358.141,273.007,358.141,290.722z"/>
<path 
  d="M347.56,290.69c0,11.957-9.691,21.647-21.647,21.647c-11.956,0-21.648-9.69-21.648-21.647
     c0-11.956,9.692-21.647,21.648-21.647C337.869,269.043,347.36,277.734,347.56,290.69z" 
  fill='#FAFCFB'
/>
<path d="M339.363,290.685c0,7.365-5.97,13.334-13.333,13.334c-7.363,0-13.332-5.969-13.332-13.334
            c0-7.363,5.969-13.331,13.332-13.331C333.393,277.354,339.363,283.322,339.363,290.685z" fill='#BDBDBD'/>
<path d="M332.582,290.685c0,3.62-2.934,6.554-6.552,6.554c-3.619,0-6.552-2.934-6.552-6.554
            c0-3.618,2.933-6.553,6.552-6.553C329.648,284.133,332.582,287.067,332.582,290.685z" fill='#BDBDBD' opacity="0.2"/>


<path d="M399.71,291.151c-1.619-0.932-0.243-9.537-0.01-15.817c0.232-6.281-3.722-9.537-23.726-21.411
        c-20.004-11.874-62.804-18.131-75.132-19.063c-12.329-0.931-33.728-11.63-50.941-20.236c-17.213-8.606-19.539-1.396-21.4,2.094
        c-1.861,3.489,36.752,24.656,36.752,24.656L214,240.771c0,0-22.949,0.371-35.976-3.816c-13.026-4.188,3.257-26.052-6.978-26.749
        c-10.234-0.697-11.398,13.26-11.398,13.26c-42.102-2.326-79.784,12.095-88.856,15.351c-9.072,3.257-13.026,1.396-17.445,3.489
        c-4.419,2.094-0.93,6.979-0.93,6.979c-9.304,6.514-6.281,16.979-6.048,31.635c0.194,12.274,22.896,15.734,30.271,16.535
        c-0.551-2.501-0.851-5.096-0.851-7.763c0-5.84,1.402-11.349,3.875-16.223c1.058-2.985,2.495-5.97,4.853-8.399
        c10.981-11.314,24.699-13.221,34.914-10.752c0.725,0.175,1.751,0.42,2.115,0.543c4.575,1.552,5.655,1.616,7.728,2.784
        c4.63,2.607,9.131,5.455,11.99,10.399c4.494,5.998,6.371,13.576,6.371,21.647c0,0.493-0.018,0.981-0.037,1.47
        c-0.105,9.579-0.742,11.854-0.742,11.854l145.758-0.229c-1.589-4.059-2.472-8.472-2.472-13.095
        c0-19.839,16.083-35.922,35.923-35.922c19.84,0,35.922,16.083,35.922,35.922c0,4.207-0.729,8.241-2.058,11.992
        c-0.353,2.11-0.685,3.425-0.685,3.425c27.7-0.697,33.477-8.606,39.524-10.467C404.818,292.779,401.328,292.082,399.71,291.151z" fill={color} />


<path d="M57.698,253.39c0,0,9.039,0.821,13.806,0c4.766-0.821,14.957-3.535,15.285-6.492
        c0.329-2.958-1.644-4.192-5.917-5.506c-4.273-1.315-8.611-3.106-8.611-3.106s-6.643,2.616-13.397,2.82
        c-6.754,0.204-9.589,3.086-6.446,8.178C55.561,254.376,57.698,253.39,57.698,253.39z" fill='#EE3E38'/>
<path d="M353.296,246.731c0,0,23.29,19.987,34.11,19.529c0,0,7.552,0.385,5.538-1.547
        c-2.324-2.227-21.128-13.684-25.163-15.269C363.982,247.952,350.087,242.329,353.296,246.731z" fill='#BDBDBD'/>
<path d="M155.558,295.821c0,0,105.923,1.573,127.196-0.464" fill='#FAFCFB'/>


<path d="M400.167,319.348c0,1.75-78.894,3.168-176.214,3.168
    c-97.32,0-176.213-1.418-176.213-3.168c0-1.749,78.894-3.168,176.213-3.168C321.273,316.18,400.167,317.599,400.167,319.348z" fill='#1D1D1B' opacity="0.1"/>


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