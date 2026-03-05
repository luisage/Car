import { PrismaClient } from '../app/generated/prisma/client'; // Ajusta la ruta a tu cliente generado
import bcrypt from "bcryptjs" // Recomendado para la contraseña del admin
import { PrismaPg } from '@prisma/adapter-pg'

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🌱 Iniciando el sembrado de datos...');

  // 1. Crear Usuario Administrador
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { usuario: 'admin' },
    update: {},
    create: {
      usuario: 'admin',
      password: hashedPassword,
      name: 'Admin',
      apellido: 'Principal',
      role: 'ADMIN',
    },
  });
  console.log('✅ Usuario administrador creado');

  // 2. Crear Etapas del Lavado
  const etapasData = [
    { nombre: 'En espera', descripcion: 'Vehículo en fila' },
    { nombre: 'Lavado', descripcion: 'Lavado' },
    { nombre: 'Interiores', descripcion: 'Limpieza de interiores y vidrios' },
    { nombre: 'Secado', descripcion: 'Secado manual' },
    { nombre: 'Terminado', descripcion: 'Listo para entrega' },
    { nombre: 'Finalizado', descripcion: 'La venta se ha cerrado' },
    { nombre: 'Mojado', descripcion: 'Agua a presión' },
    { nombre: 'Enjabonado', descripcion: 'Jabón a presión' },
    { nombre: 'Enjuague', descripcion: 'Retirando jabón con agua a presión' },
  ];

  for (const etapa of etapasData) {
    await prisma.etapa.upsert({
      where: { nombre: etapa.nombre },
      update: {},
      create: etapa,
    });
  }
  console.log('✅ Etapas creadas');

  // 3. Crear Servicios
  const serviciosData = [
    { nombre: 'Básico', costo: 80, descripcion: 'Lavado Básico' },
    { nombre: 'Estándar', costo: 100, descripcion: 'Lavado Estándar' },
    { nombre: 'Premium', costo: 130, descripcion: 'Lavado Premium' },
    { nombre: 'Exprés', costo: 50, descripcion: 'Lavado Exprés' },
  ];

  for (const servicio of serviciosData) {
    await prisma.servicio.upsert({
      where: { nombre: servicio.nombre },
      update: {},
      create: servicio,
    });
  }
  console.log('✅ Servicios creados');

  // 4. Asignar las etapas a los servicios
  const serviciosEtapaData = [
    { servicioId: 1, etapaId: 2, orden: 1 },
    { servicioId: 1, etapaId: 4, orden: 2 },
    { servicioId: 1, etapaId: 3, orden: 3 },
    { servicioId: 1, etapaId: 5, orden: 4 },

    { servicioId: 4, etapaId: 7, orden: 1 },
    { servicioId: 4, etapaId: 8, orden: 2 },
    { servicioId: 4, etapaId: 9, orden: 3 },
    { servicioId: 4, etapaId: 4, orden: 4 },
    { servicioId: 4, etapaId: 5, orden: 5 },

    { servicioId: 2, etapaId: 2, orden: 1 },
    { servicioId: 2, etapaId: 3, orden: 2 },
    { servicioId: 2, etapaId: 5, orden: 3 },
  ];

  for (const serviciosEtapa of serviciosEtapaData) {
    await prisma.servicioEtapa.upsert({
      where: { servicioId_etapaId: {
            servicioId: serviciosEtapa.servicioId,
            etapaId: serviciosEtapa.etapaId
          } },
      update: {},
      create: serviciosEtapa,
    });
  }
  console.log('✅ Etapas agregadas a los servicios');

  // 5. Crear Tipos de Auto (Catálogo)
  const tiposAutoData = [
    { nombre: 'Sedan', carroceria: 'Sedan', imagen: '/imagenAuto/Sedan.png' },
    { nombre: 'SUV2', carroceria: 'Suv', imagen: '/imagenAuto/Suv2.png' },
    { nombre: 'Convertible', carroceria: 'Convertible', imagen: '/imagenAuto/Convertible.png' },
    { nombre: 'Pickup', carroceria: 'Pickup', imagen: '/imagenAuto/Pickup.png' },
    { nombre: 'Deportivo', carroceria: 'Deportivo', imagen: '/imagenAuto/Deportivo.png' },
  ];

  for (const tipo of tiposAutoData) {
    await prisma.tipoAuto.upsert({
      where: { nombre: tipo.nombre },
      update: {},
      create: tipo,
    });
  }
  console.log('✅ Tipos de auto creados');

  console.log('✨ Sembrado completado con éxito.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
  
// prisma/seed.ts
/*import { PrismaClient } from '../app/generated/prisma/client';
const prisma = new PrismaClient();

async function main() {
  const modelos = [
    { nombre: 'Sedán Estándar', carroceria: 'Sedan', imagen: '/tipos-auto/sedan.png' },
    { nombre: 'SUV Familiar', carroceria: 'SUV', imagen: '/tipos-auto/suv.png' },
    { nombre: 'Pickup 4x4', carroceria: 'Pickup', imagen: '/tipos-auto/pickup.png' },
    { nombre: 'Compacto 3p', carroceria: 'Hatchback', imagen: '/tipos-auto/hatchback.png' },
    { nombre: 'Van de Carga', carroceria: 'Van', imagen: '/tipos-auto/van.png' },
  ];

  for (const m of modelos) {
    await prisma.tipoAuto.upsert({
      where: { id: 0 }, // Solo como referencia, creará si no existen
      update: {},
      create: m,
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());*/