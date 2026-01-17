export type AutoStatus = {
  id: number
  tipo: VehicleType
  color: string
  etapa: 'Lavado' | 'Interiores' | 'Secado'| 'Terminado'
}

export type VehicleType =
  | 'sedan'
  | 'suv'
  | 'pickup'
  | 'deportivo'

export async function getAutoStatus(): Promise<AutoStatus[]> {
  const res = await fetch('/api/autoEstatus/', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Error obteniendo estado del auto')
  }

  return res.json()
}
