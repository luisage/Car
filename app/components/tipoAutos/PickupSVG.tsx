'use client'

type Props = {
  color: string
  etapa: string
}

export default function PickupSVG({ color }: Props) {
  return (
    <svg viewBox="0 0 600 300" className="w-full">
      <rect x="100" y="130" width="400" height="80" rx="20" fill={color} />
    </svg>
  )
}
