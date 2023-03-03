import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { bookId } = req.body;
    const deletedBook = await prisma.book.delete({
        where: {
            bookId: parseInt(bookId)
        }
    });

    res.json(deletedBook);
}