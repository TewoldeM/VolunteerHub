import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getUser(userId: string) {
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });
  return user;
}


// export async function getOrganizations() {
//   const user = await getUser();
//   if (!user) return [];
//   const organizations = await prisma.organization.findMany({
//     where: {
//       ownerId: user.id,
//     },
//   });
//   return organizations;
// }