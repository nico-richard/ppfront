/*
  Warnings:

  - The primary key for the `Vehicle` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Vehicle` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `View` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `View` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "View" DROP CONSTRAINT "View_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "View_pkey" PRIMARY KEY ("id");
