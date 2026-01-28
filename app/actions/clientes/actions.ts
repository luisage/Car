// actions.ts
'use server'
import { prisma } from '@/lib/prisma';
import { Session } from 'inspector';
import { revalidatePath } from 'next/cache';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function addClienteConAuto(prevState: any, formData: FormData) {
    const session = await getServerSession(authOptions);

    //const session = await getServerSession()
    
    if (!session || !session.user) {
    return { error: "Tu sesión ha expirado. Por favor, inicia sesión de nuevo." };
    }
    console.log("**userAntes** - ", session.user.id);
    const idInt = parseInt(session.user.id);
    
    console.log("el id de usuario Int: - ", idInt);

    //const userId = parseInt(session.user.id);
  // Datos del Cliente
  const nombre = formData.get('nombre') as string;
  const apellido = formData.get('apellido') as string;
  const celular = formData.get('celular') as string;

  // Datos del Auto
  const placa = formData.get('placa') as string;
  const marca = formData.get('marca') as string;
  const modelo = formData.get('modelo') as string;
  const tipo = formData.get('tipo') as string;
  const color = formData.get('color') as string;

  const servicioData = formData.get('servicioData') as string;

  // Separamos el ID del servicio y el Costo
  const [servicioId, costo] = servicioData.split('|');

  const contadorPromocion=1;

  /*if (celular) {
    const clienteExistente = await prisma.cliente.findUnique({
      where: { celular: celular } // Recuerda que en Prisma el campo debe ser @unique
    });

    if (clienteExistente) {
      // Aquí puedes lanzar un error o retornar un objeto con el mensaje
      return { error: "Este teléfono ya pertenece a otro cliente registrado." };
    }
  }*/

  try {
    const telExiste = await prisma.cliente.findUnique({ where: { celular } });
    if (telExiste) {
      return { error: `El teléfono ${celular} ya está registrado.` };
    }

    const placaExiste = await prisma.auto.findUnique({ where: { placa } });
    if (placaExiste) {
      return { error: `El vehículo con placa ${placa} ya está en el sistema.` };
    }

    await prisma.$transaction(async (tx) => {
  // 1. Crear el cliente y el auto
      const nuevoCliente = await tx.cliente.create({
        data: {
        nombre,
        apellido,
        celular,
        autos: {
            create: {
            placa,
            marca,
            modelo,
            color,
            tipo,
            }
        }
        },
        include: { autos: true }
    });


    await tx.venta.create({
    data: {
        servicioId: parseInt(servicioId), 
        total: parseFloat(costo),
        clienteId:nuevoCliente.id,
        contadorPromocion,
        userId: idInt, // ID del cajero/admin
        autoId:nuevoCliente.autos[0].id
    }
    });
    });
    
    revalidatePath('/clientes'); // Actualiza la lista automáticamente
    return { success: true, error: null }; // Limpiamos errores si hubo éxito
  } catch (error) {
    return { error: "Error inesperado al guardar en la base de datos." };
  }
}

// actions.ts
export async function addVentaExistente(prevState: any, formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return { error: "No autorizado" };

  const autoId = parseInt(formData.get('autoId') as string);
  const clienteId = parseInt(formData.get('clienteId') as string);
  const servicioData = formData.get('servicioData') as string;
  const [servicioId, costo] = servicioData.split('|');

  // 1. Buscar la última venta de este auto para ver el contador
  const ultimaVenta = await prisma.venta.findFirst({
    where: { autoId: autoId },
    orderBy: { id: 'desc' },
  });

  // 2. Lógica del contador: Si no hay ventas es 1, si hay 5 reinicia a 1, si no suma 1
  let nuevoContador = 1;
  if (ultimaVenta) {
    nuevoContador = ultimaVenta.contadorPromocion >= 5 ? 1 : ultimaVenta.contadorPromocion + 1;
  }

  // 3. Crear la venta
  await prisma.venta.create({
    data: {
      autoId,
      clienteId,
      servicioId: parseInt(servicioId),
      userId: parseInt(session.user.id),
      total: nuevoContador === 5 ? 0 : parseFloat(costo), // Precio 0 si es la 5ta
      contadorPromocion: nuevoContador,
    },
  });

  revalidatePath('/clientes');
  return { success: true, contador: nuevoContador };
}

export async function addNuevoAuto(formData: FormData) {
  const clienteId = Number(formData.get('clienteId'));
  const placa = formData.get('placa') as string;
  const marca = formData.get('marca') as string;
  const modelo = formData.get('modelo') as string;
  const color = formData.get('color') as string;

  await prisma.auto.create({
    data: {
      placa: placa.toUpperCase(),
      marca,
      modelo,
      color,
      clienteId
    }
  });

  revalidatePath('/clientes'); // O la ruta donde esté tu lista
}
/*
await prisma.cliente.create({
        data: {
        nombre,
        apellido,
        celular,
        autos: {
            create: {
            placa,
            marca,
            modelo,
            color,
            tipo,
                ventas: {
                    create: {
                    // Aquí guardamos la relación y el costo histórico
                    servicioId: parseInt(servicioId), 
                    total: parseFloat(costo),
                    clienteId:0,
                    contadorPromocion,
                    userId: session?.user.id, // ID del cajero/admin
              }
            }
            }
        }
        }
    });*/