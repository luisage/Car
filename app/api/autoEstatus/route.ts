import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
    //var col = "";
const ventas = await prisma.venta.findMany({
     where: {
      etapaId: {
        not: 5,
      },
    },
    include: {
      //cliente: true,
      auto: { select: { tipo: true, color: true } },
      //servicio: true,
      etapa: { select: { nombre: true } },
      //user: { select: { name: true } },
    },
    orderBy: { createdAt: 'asc' },

  });
if (!ventas.length) {
    return NextResponse.json(null)
  }

  const venta = ventas[0]

  const response = ventas.map((venta) => ({
    id: venta.id,
    tipo: venta.auto.tipo,
    color: venta.auto.color,
    etapa: venta.etapa.nombre,
  }))

  return NextResponse.json(response)
}
