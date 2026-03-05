// @/actions/configuracion/relaciones.ts
'use server'
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function actualizarRelacionesEtapas(servicioId: number, etapasIds: number[]) {
  try {
    // 1. Eliminamos las relaciones actuales de este servicio
    await prisma.servicioEtapa.deleteMany({
      where: { servicioId }
    });

    // 2. Creamos las nuevas relaciones con el nuevo orden
    const data = etapasIds.map((etapaId, index) => ({
      servicioId,
      etapaId,
      orden: index + 1
    }));

    await prisma.servicioEtapa.createMany({ data });

    revalidatePath('/configuracion');
    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "No se pudieron guardar las relaciones" };
  }
}