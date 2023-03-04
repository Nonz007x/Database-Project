import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { bookId, bookname, author, price, cover, synopsis, date } = req.body;
    const newDate = new Date();
    newDate.setHours(newDate.getHours() + 7);
    try {
        const updatedBook = await prisma.book.update({
            where: {
                bookId: parseInt(bookId),
            },
            data: {
                bookname: bookname,
                author: author,
                price: parseFloat(price),
                cover: cover,
                synopsis: synopsis,
                date: newDate,
            },
        });
        res.send({ success: true, message: 'แก้ไขสำเร็จ', updatedBook });
    } catch (error) {
        res.send({ success: false, message: 'query error', error: error });
    }
}