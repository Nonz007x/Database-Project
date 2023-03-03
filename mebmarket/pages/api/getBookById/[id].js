import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handler(req, res) {
    const data = req.query.id;
    const book = await prisma.book.findUnique({
        where : {
            bookId : parseInt(data)
        },
    });
    res.json(book)
}