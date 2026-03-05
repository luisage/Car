-- CreateTable
CREATE TABLE "Noticias" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "estatus" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Noticias_pkey" PRIMARY KEY ("id")
);
