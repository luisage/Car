-- CreateTable
CREATE TABLE "TipoAuto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "carroceria" TEXT NOT NULL,
    "imagen" TEXT,

    CONSTRAINT "TipoAuto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TipoAuto_nombre_key" ON "TipoAuto"("nombre");
