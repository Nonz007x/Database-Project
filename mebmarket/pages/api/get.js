import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const sqlSelect = await prisma.book.findMany();
    res.json(sqlSelect);
}
