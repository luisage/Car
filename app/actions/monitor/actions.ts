export type AutoStatus = {
  id: number
  tipo: string//VehicleType
  color: string
  etapa: 'Lavado' | 'Interiores' | 'Secado'| 'Terminado' | 'Mojado' | 'Enjabonado' | 'Enjuague'  | 'En espera'
  etapaOrden: number
  totalEtapas: number
  etapas: {
    id: number
    nombre: string
    orden: number
  }[]
}

/*export type VehicleType =
  | 'Sedan'
  | 'suv'
  | 'pickup'
  | 'deportivo'
  | 'suv2'*/

export async function getAutoStatus(): Promise<AutoStatus[]> {
  const res = await fetch('/api/autoEstatus/', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Error obteniendo estado del auto')
  }

  return res.json()
}
