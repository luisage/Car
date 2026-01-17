'use server' // Indica que este código solo se ejecuta en el servidor
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import bcrypt from "bcryptjs"
import { Role } from "../app/generated/prisma/enums"

export async function addUser(formData: FormData) {
  const name = formData.get('name') as string
  const apellido = formData.get('apellido') as string
  const usuario = formData.get('usuario') as string
  const password1 = formData.get('contraseña') as string
  const role = formData.get('role') as Role

 // const role = formData.get('role') as Role

  const password = await bcrypt.hash(password1, 10)
  // Guardar en PostgreSQL
  await prisma.user.create({
    data: {
      name,
      apellido,
      usuario,
      password,
      role,
  //    age: age ? parseInt(age) : null,
    },
  })

  // Refrescar la página para ver el nuevo usuario
  revalidatePath('/')
}

export async function deleteUser(id: number) {
  // Eliminamos el usuario por su ID único
  await prisma.user.delete({
    where: {
      id: id,
    },
  })

  // Refrescamos la página para que el usuario desaparezca de la lista
  revalidatePath('/')
}