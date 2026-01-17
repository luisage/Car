/*
  Warnings:

  - You are about to alter the column `descuento` on the `Venta` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Venta" ALTER COLUMN "descuento" SET DEFAULT 0,
ALTER COLUMN "descuento" SET DATA TYPE INTEGER;
