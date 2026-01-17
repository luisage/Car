/*
  Warnings:

  - You are about to alter the column `costo` on the `Servicio` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Integer`.
  - You are about to alter the column `total` on the `Venta` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Servicio" ALTER COLUMN "costo" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Venta" ALTER COLUMN "total" SET DATA TYPE INTEGER;
