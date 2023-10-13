/*
  Warnings:

  - Added the required column `ganhosId` to the `Bancos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gastosId` to the `Categoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Ganhos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Gastos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bancos" ADD COLUMN     "ganhosId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Categoria" ADD COLUMN     "gastosId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Ganhos" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Gastos" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Ganhos" ADD CONSTRAINT "Ganhos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bancos" ADD CONSTRAINT "Bancos_ganhosId_fkey" FOREIGN KEY ("ganhosId") REFERENCES "Ganhos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gastos" ADD CONSTRAINT "Gastos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Categoria" ADD CONSTRAINT "Categoria_gastosId_fkey" FOREIGN KEY ("gastosId") REFERENCES "Gastos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
