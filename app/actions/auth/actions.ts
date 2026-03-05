// actions/auth/actions.ts
'use server'
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import * as bcrypt from 'bcryptjs';

export async function logout() {
  // Aquí deberías limpiar tu cookie de sesión o JWT
  // Ejemplo si usas una librería como NextAuth o cookies manuales:
  // cookies().delete('session')
  redirect('/login');
}

export async function updatePassword(userId: number | string, currentPass: string, newPass: string) {
  try {
    const id = Number(userId);

    // 1. Buscar al usuario para obtener su contraseña actual (hasheada)
    const user = await prisma.user.findUnique({
      where: { id }
    });

    if (!user) return { success: false, error: "Usuario no encontrado" };

    // 2. Comparar la contraseña ingresada con la de la base de datos
    const isMatch = await bcrypt.compare(currentPass, user.password);
    
    if (!isMatch) {
      return { success: false, error: "La contraseña actual es incorrecta" };
    }

    // 3. Si coincide, hashear la nueva y actualizar
    const hashedNewPassword = await bcrypt.hash(newPass, 10);
    
    await prisma.user.update({
      where: { id },
      data: { password: hashedNewPassword }
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Error interno del servidor" };
  }
}