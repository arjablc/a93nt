import { global } from "styled-jsx/css";
import { PrismaClient } from "@/generated/prisma/client";

const prismaGlobal = global as unknown as {
  prisma: PrismaClient;
};

const prisma = prismaGlobal.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") prismaGlobal.prisma = prisma;

export default prisma;
