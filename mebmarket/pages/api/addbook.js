import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function handler(req, res) {
    const { bookId, bookname, author, price, cover, synopsis} = req.body;
    const newDate = new Date();
    newDate.setHours(newDate.getHours() + 7);
    console.log(typeof(newDate))
    try {
        const existingBook = await prisma.book.findFirst({
            where: {
                bookId: parseInt(bookId),
            },
        })
        if (existingBook) {
            return res.status(200).json('หนังสือมีอยู่แล้ว');
        }
        await prisma.book.create({
            data: {
                bookId: parseInt(bookId),
                bookname: bookname,
                author: author,
                price: parseFloat(price),
                cover: cover,
                date: newDate,
                synopsis: synopsis,
            }
        })
        return res.status(201).json('เพิ่มหนังสือสำเร็จ');
    }
    catch (error) {
        console.log(error)
        return res.status(500).json('Internal Server Error')
    }

}