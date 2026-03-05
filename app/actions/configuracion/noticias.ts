// actions/configuracion/noticias.ts
'use server'
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function saveNoticia(formData: FormData) {
  const id = formData.get('id');
  const titulo = formData.get('titulo') as string;
  const descripcion = formData.get('descripcion') as string;
  const estatus = formData.get('estatus') === 'true';

  if (id) {
    await prisma.noticias.update({
      where: { id: Number(id) },
      data: { titulo, descripcion, estatus }
    });
  } else {
    await prisma.noticias.create({
      data: { titulo, descripcion, estatus }
    });
  }
  revalidatePath('/');
  revalidatePath('/configuracion');
}

export async function deleteNoticia(id: number) {
  await prisma.noticias.delete({ where: { id } });
  revalidatePath('/');
  revalidatePath('/configuracion');
}

export async function toggleNoticiaEstatus(id: number, currentEstatus: boolean) {
  await prisma.noticias.update({
    where: { id },
    data: { estatus: !currentEstatus }
  });
  revalidatePath('/');
}