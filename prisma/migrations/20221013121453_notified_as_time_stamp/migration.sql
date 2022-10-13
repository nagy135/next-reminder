/*
  Warnings:

  - The `notified` column on the `Record` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Record" DROP COLUMN "notified",
ADD COLUMN     "notified" TIMESTAMP(3);
