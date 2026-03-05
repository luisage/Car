// actions/reportes/actions.ts
'use server'
import { prisma } from '@/lib/prisma';
import { startOfDay, subDays, format, startOfMonth, endOfMonth } from 'date-fns';

export async function getDatosVentas(periodo: '15dias' | 'meses') {
  if (periodo === '15dias') {
    const hace15Dias = subDays(new Date(), 15);
    const ventas = await prisma.venta.findMany({
      where: { createdAt: { gte: hace15Dias } },
      select: { total: true, createdAt: true },
      orderBy: { createdAt: 'asc' }
    });

    // Agrupar por día
    const agrupado = ventas.reduce((acc: any, venta) => {
      const fecha = format(venta.createdAt, 'dd MMM');
      acc[fecha] = (acc[fecha] || 0) + venta.total;
      return acc;
    }, {});

    return Object.keys(agrupado).map(key => ({ name: key, total: agrupado[key] }));
  } else {
    // Agrupar por mes (últimos 6 meses por ejemplo)
    const ventas = await prisma.venta.findMany({
      select: { total: true, createdAt: true },
      orderBy: { createdAt: 'asc' }
    });

    const agrupado = ventas.reduce((acc: any, venta) => {
      const mes = format(venta.createdAt, 'MMMM yyyy');
      acc[mes] = (acc[mes] || 0) + venta.total;
      return acc;
    }, {});

    return Object.keys(agrupado).map(key => ({ name: key, total: agrupado[key] }));
  }
}