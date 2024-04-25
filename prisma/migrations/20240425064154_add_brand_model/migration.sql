/*
Warnings:

- You are about to drop the column `brand` on the `Vehicle` table. All the data in the column will be lost.
- Added the required column `brandId` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

 */
-- AlterTable
ALTER TABLE "Vehicle"
DROP COLUMN "brand"
,
ADD COLUMN "brandId" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "Brand";

-- CreateTable
CREATE TABLE "Brand"
(
  "id" SERIAL NOT NULL,
  "name" TEXT NOT NULL,
  CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand" ("id")
ON DELETE RESTRICT ON
UPDATE CASCADE;