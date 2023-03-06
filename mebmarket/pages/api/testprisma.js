import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();
export default async function handler(req, res) {
    const user = await prisma.user.findMany({
        where: {
            AND: {
                username: 'nitid',
                password: '123',
            },
        }
    });
    if (user[0]) {
        res.status(200).json(user)
    } else {
        res.status(200).json("found")
    }
}