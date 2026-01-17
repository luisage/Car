/*
  Warnings:

  - You are about to drop the column `etapaId` on the `Venta` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Venta" DROP CONSTRAINT "Venta_etapaId_fkey";

-- AlterTable
ALTER TABLE "Venta" DROP COLUMN "etapaId";
