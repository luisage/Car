// app/page.tsx
import { prisma } from '@/lib/prisma';
import HomeClient from '../components/Home/home'; // El componente con el carrusel

export default async function HomePage() {
  // 1. Obtenemos los servicios reales de la BD
  const servicios = await prisma.servicio.findMany({
    orderBy: { costo: 'asc' }
  });

  // 2. Obtenemos las noticias activas
  const noticias = await prisma.noticias.findMany({
    where: { estatus: true },
    orderBy: { id: 'desc' }
  });

  return <HomeClient servicios={servicios} noticias={noticias} />;
}