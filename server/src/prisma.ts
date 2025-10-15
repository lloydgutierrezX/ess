import { PrismaClient } from '@prisma/client';

const globalFormPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalFormPrisma.prisma ??
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  });

if (process.env.NODE_ENV !== 'production')
  globalFormPrisma.prisma = prisma;