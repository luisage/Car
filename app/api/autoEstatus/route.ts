import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
    //var col = "";
const ventas = await prisma.venta.findMany({
     where: {
      /*etapaId: {
        notIn: [1,7],
      },*/
        AND: [
          {
            etapaId: {not: 1},
          },
          {
            estatus: "Activa",
          },
        ],
      },
    include: {
      //cliente: true,
      auto: { select: { tipo: true, color: true } },
      //servicio: true,
      servicio: {  include: {
                    etapa: { include: { etapa: { select: {nombre:true} } },
                      orderBy: { orden: 'asc' },
                    },
                  },
                },
      etapa: { select: { nombre: true } },
      //user: { select: { name: true } },
    },
    orderBy: { createdAt: 'asc' },
  });
if (!ventas.length) {
    return NextResponse.json([])
  }

  //const venta = ventas[0]

  /*const response = ventas.map((venta) => ({
    id: venta.id,
    tipo: venta.auto.tipo,
    color: venta.auto.color,
    etapa: venta.etapa.nombre,
  }))*/

  const response = ventas.map(v => {
  const totalEtapas = v.servicio.etapa.length

  const etapas = v.servicio.etapa.map(e => ({
  id: e.etapaId,
  nombre: e.etapa.nombre,
  orden: e.orden,
  }))

  const etapaRelacion = v.servicio.etapa.find(
    e => e.etapaId === v.etapaId
  )

  return {
    id: v.id,
    tipo: v.auto.tipo,
    color: v.auto.color,
    etapa: v.etapa.nombre,
    etapaOrden: etapaRelacion?.orden ?? 0,
    totalEtapas,
    etapas,
  }
})

  return NextResponse.json(response)
}
