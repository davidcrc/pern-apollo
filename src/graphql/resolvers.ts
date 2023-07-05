import { Project } from "@prisma/client";
import { prisma } from "../db";

export const resolvers = {
  Query: {
    hello: async (_parent: any, args: any) => {
      // return await prisma.post.findMany();

      return "Hola!";
    },
  },
  Mutation: {
    createProject: async (_: any, { name, description }: Project) => {
      console.log("args", name, description);

      try {
        const newProject = await prisma.project.create({
          data: { name, description },
        });

        return newProject;
      } catch (error) {
        // Manejar el error de alguna manera, como mostrar un mensaje de error o realizar una acción específica.
        console.error("Error al crear el proyecto:", error);
        throw new Error("No se pudo crear el proyecto.");
      }
    },
  },
};
