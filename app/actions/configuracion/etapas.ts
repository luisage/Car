// @/actions/configuracion/etapas.ts
'use server'
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function saveEtapa(formData: FormData) {
  const id = formData.get('id');
  const nombre = formData.get('nombre') as string;
  const descripcion = formData.get('descripcion') as string;

  if (id) {
    await prisma.etapa.update({
      where: { id: Number(id) },
      data: { nombre, descripcion }
    });
  } else {
    await prisma.etapa.create({
      data: { nombre, descripcion }
    });
  }
  revalidatePath('/configuracion');
}

export async function deleteEtapa(id: number) {
  // Nota: Prisma lanzará un error si intentas borrar una etapa 
  // que ya está relacionada en ServicioEtapa.
  await prisma.etapa.delete({ where: { id } });
  revalidatePath('/configuracion');
}