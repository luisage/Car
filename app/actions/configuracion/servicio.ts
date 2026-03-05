// @/actions/configuracion/servicios.ts
'use server'
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function saveServicio(formData: FormData) {
  const id = formData.get('id');
  const nombre = formData.get('nombre') as string;
  const costo = parseInt(formData.get('costo') as string);
  const descripcion = formData.get('descripcion') as string;

  if (id) {
    await prisma.servicio.update({
      where: { id: Number(id) },
      data: { nombre, costo, descripcion }
    });
  } else {
    await prisma.servicio.create({
      data: { nombre, costo, descripcion }
    });
  }
  revalidatePath('/configuracion');
}

export async function deleteServicio(id: number) {
  await prisma.servicio.delete({ where: { id } });
  revalidatePath('/configuracion');
}