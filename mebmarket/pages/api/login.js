import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { username, password } = req.body;
    const user = await prisma.user.findMany({
        where: {
            AND: [
                { username: username },
                { password: password }
            ]
        },
        take: 1
    });
    res.json(user[0]);
}
