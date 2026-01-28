-- CreateTable
CREATE TABLE "ServicioEtapa" (
    "servicioId" INTEGER NOT NULL,
    "etapaId" INTEGER NOT NULL,
    "orden" INTEGER NOT NULL,

    CONSTRAINT "ServicioEtapa_pkey" PRIMARY KEY ("servicioId","etapaId")
);

-- CreateIndex
CREATE UNIQUE INDEX "ServicioEtapa_servicioId_orden_key" ON "ServicioEtapa"("servicioId", "orden");

-- AddForeignKey
ALTER TABLE "ServicioEtapa" ADD CONSTRAINT "ServicioEtapa_servicioId_fkey" FOREIGN KEY ("servicioId") REFERENCES "Servicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServicioEtapa" ADD CONSTRAINT "ServicioEtapa_etapaId_fkey" FOREIGN KEY ("etapaId") REFERENCES "Etapa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
