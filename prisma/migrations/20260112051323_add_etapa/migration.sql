-- AlterTable
ALTER TABLE "Venta" ADD COLUMN     "etapaId" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "Etapa" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "Etapa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Etapa_nombre_key" ON "Etapa"("nombre");

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_etapaId_fkey" FOREIGN KEY ("etapaId") REFERENCES "Etapa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
