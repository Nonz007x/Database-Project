import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { username, password } = req.body;
    const user = await prisma.user.findFirst({
        where: {
            AND: [
                { username: username },
                { password: password }
            ]
        },
    });
    res.json(user[0]);
}
