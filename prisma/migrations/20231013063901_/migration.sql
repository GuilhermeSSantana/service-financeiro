/*
  Warnings:

  - You are about to drop the column `ganhosId` on the `Bancos` table. All the data in the column will be lost.
  - You are about to drop the column `gastosId` on the `Categoria` table. All the data in the column will be lost.
  - Added the required column `bancosId` to the `Ganhos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoriaId` to the `Gastos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Bancos" DROP CONSTRAINT "Bancos_ganhosId_fkey";

-- DropForeignKey
ALTER TABLE "Categoria" DROP CONSTRAINT "Categoria_gastosId_fkey";

-- AlterTable
ALTER TABLE "Bancos" DROP COLUMN "ganhosId";

-- AlterTable
ALTER TABLE "Categoria" DROP COLUMN "gastosId";

-- AlterTable
ALTER TABLE "Ganhos" ADD COLUMN     "bancosId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Gastos" ADD COLUMN     "categoriaId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Ganhos" ADD CONSTRAINT "Ganhos_bancosId_fkey" FOREIGN KEY ("bancosId") REFERENCES "Bancos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gastos" ADD CONSTRAINT "Gastos_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
