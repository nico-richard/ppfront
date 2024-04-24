/*
  Warnings:

  - You are about to drop the column `nbViews` on the `Vehicle` table. All the data in the column will be lost.
  - Added the required column `comment` to the `Vehicle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Vehicle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `equipment` to the `Vehicle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `licencePlate` to the `Vehicle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner` to the `Vehicle` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `brand` on the `Vehicle` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Brand" AS ENUM ('RENAULT', 'PEUGEOT');

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "nbViews",
ADD COLUMN     "comment" TEXT NOT NULL,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "equipment" TEXT NOT NULL,
ADD COLUMN     "licencePlate" TEXT NOT NULL,
ADD COLUMN     "owner" TEXT NOT NULL,
DROP COLUMN "brand",
ADD COLUMN     "brand" "Brand" NOT NULL;
