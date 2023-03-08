import excuteQuery from '@/shared/database';

export default async function handler(req, res) {
    try {
        const data = req.query;
        const book = await excuteQuery({
            query: 'SELECT book.bookId, book.bookname, book.author, book.price, book.cover, book.rating, book.date,  book.synopsis, category.categoryName FROM book LEFT JOIN categorized ON book.bookId = categorized.bookId LEFT JOIN category ON categorized.categoryId = category.categoryId WHERE book.bookname = ?',
            values: [data.name]
        });
        res.send(book[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: 'Internal server error' });
    }
}

// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//     const data = req.query;
//     const book = await prisma.book.findFirst({
//         where: {
//             bookname: data.name
//         }
//     });
//     res.json(book);
// }