'use client'

import SedanSVG from './SedanSVG'
import SuvSVG from './SuvSVG'
import Suv2SVG from './Suv2SVG'
import PickupSVG from './PickupSVG'
import DeportivoSVG from './DeportivoSVG'
//import { VehicleType } from '../../actions/monitor/actions'

type Props = {
  tipo: string//VehicleType
  color: string
  etapa: 'Lavado' | 'Interiores' | 'Secado' | 'Terminado'
}

export default function VehicleSVG({ tipo, color, etapa }: Props) {
  switch (tipo) {
    case 'Sedan':
      return <SedanSVG color={color} etapa={etapa} />
    case 'suv':
      return <SuvSVG color={color} etapa={etapa} />
    case 'Suv2':
      return <Suv2SVG color={color} etapa={etapa} />
    case 'pickup':
      return <PickupSVG color={color} etapa={etapa} />
    case 'deportivo':
      return <DeportivoSVG color={color} etapa={etapa} />
    default:
      return null
  }
}
