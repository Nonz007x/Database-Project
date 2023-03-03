import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const data = req.query;
    const book = await prisma.book.findFirst({
        where: {
            bookname: data.name
        }
    });
    res.json(book);
}