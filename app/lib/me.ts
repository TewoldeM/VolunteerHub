// import { NextApiRequest, NextApiResponse } from "next";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// const me = async (req: NextApiRequest, res: NextApiResponse) => {
//   const token = req.cookies["next-auth.session-token"];
//   if (!token) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }

//   const user = await prisma.user.findUnique({
//     where: { id: token.sub },
//   });

//   if (!user) {
//     return res.status(404).json({ error: "User not found" });
//   }

//   return res.json(user);
// };

// export default me;
