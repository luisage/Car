'use server'
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function cambiarEtapaDinamica(ventaId: number, direccion: 'SIGUIENTE' | 'ANTERIOR') {
  // 1. Obtener la venta actual con su servicio y el orden de su etapa actual
  const venta = await prisma.venta.findUnique({
    where: { id: ventaId },
    include: {
      servicio: {
        include: { etapa: { orderBy: { orden: 'asc' } } }
      }
    }
  });

  if (!venta) return;
   
    let ordenActual 

  if (venta.etapaId === 1){ordenActual = 0}
    else{
  // 2. Encontrar el orden actual de la etapa en ese servicio
  const etapaRelacionActual = venta.servicio.etapa.find(e => e.etapaId === venta.etapaId);
  if (!etapaRelacionActual) return;
    //}
    //let ordenActual;
  /*if (venta.etapaId === 1 && !etapaRelacionActual){ordenActual = 0}
  else{*/

   ordenActual = etapaRelacionActual.orden;
    }
  const nuevoOrden = direccion === 'SIGUIENTE' ? ordenActual + 1 : ordenActual - 1;

  // 3. Buscar si existe una etapa con ese nuevo orden para ese servicio
  const siguienteRelacion = venta.servicio.etapa.find(e => e.orden === nuevoOrden);

  if (siguienteRelacion) {
    await prisma.venta.update({
      where: { id: ventaId },
      data: { etapaId: siguienteRelacion.etapaId }
    });
    revalidatePath('/historial');
  }
}

export async function actualizarEstatusVenta(ventaId: number, nuevoEstatus: string) {
  await prisma.venta.update({
    where: { id: ventaId },
    data: { estatus: nuevoEstatus }
  });
  revalidatePath('/historial'); // Refresca la tabla del reporte
}