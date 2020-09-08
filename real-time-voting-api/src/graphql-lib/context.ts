import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface Context {
  db: PrismaClient;
}

export const createContext = (): Context => {
  return {
    db: prisma,
  };
};