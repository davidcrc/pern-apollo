import { prisma } from "../db";
import { Resolvers } from "../generated/graphql";

export const resolvers: Resolvers = {
  // export const resolvers = {
  Query: {
    hello: async (_parent: any, args: any) => {
      // return await prisma.post.findMany();

      return "Hola!";
    },
    projects: async () => {
      return await prisma.project.findMany({
        include: {
          tasks: true,
        },
      });
    },
    project: async (_, { projectId }) => {
      return await prisma.project.findFirstOrThrow({
        where: {
          uuid: projectId,
        },
        include: {
          tasks: true,
        },
      });
    },
    tasks: async () => {
      return await prisma.task.findMany({
        include: {
          Project: true,
        },
      });
    },
    task: async (_, { taskId }) => {
      return await prisma.task.findFirstOrThrow({
        where: {
          uuid: taskId,
        },
        include: {
          Project: true,
        },
      });
    },
  },
  Mutation: {
    createProject: async (_: any, { name, description }) => {
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
    createTask: async (_: any, { title, projectId }) => {
      try {
        const newTask = await prisma.task.create({
          data: { title, projectId },
          include: {
            Project: true,
          },
        });

        return newTask;
      } catch (error) {
        console.error("Error al crear las tarea:", error);
        throw new Error("No se pudo crear la tarea.");
      }
    },
    deleteProject: async (_: any, { projectId }) => {
      try {
        const deletedProject = await prisma.project.delete({
          where: {
            uuid: projectId,
          },
        });

        return deletedProject;
      } catch (error) {
        // TODO: handle this various erros
        throw new Error("Project not found");
      }
    },
    deleteTask: async (_: any, { taskId }) => {
      try {
        const deletedTask = await prisma.task.delete({
          where: {
            uuid: taskId,
          },
        });

        return deletedTask;
      } catch (error) {
        // TODO: handle this various erros

        throw new Error("Task not found");
      }
    },
    updateProject: async (_: any, args) => {
      const { projectId, ...rest } = args;

      try {
        const updatedProject = await prisma.project.update({
          where: {
            uuid: projectId,
          },
          data: {
            ...rest,
          },
        });

        return updatedProject;
      } catch (error) {
        // TODO: handle this various erros

        throw new Error("Project not found");
      }
    },
    updateTask: async (_: any, args) => {
      const { taskId, ...rest } = args;

      try {
        const updatedTask = await prisma.task.update({
          where: {
            uuid: taskId,
          },
          data: {
            ...rest,
          },
        });

        return updatedTask;
      } catch (error) {
        // TODO: handle this various erros

        throw new Error("Task not found");
      }
    },
  },
};
