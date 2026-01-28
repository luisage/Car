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