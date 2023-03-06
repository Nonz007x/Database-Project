import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const count = await prisma.book.count();
    res.json(count);
}
