/*
  Warnings:

  - A unique constraint covering the columns `[uuid]` on the table `Project` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Project_uuid_key" ON "Project"("uuid");
