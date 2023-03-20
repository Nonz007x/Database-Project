// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//     const { bookId, bookname, author, price, cover, synopsis, date, category } =
//         req.body;
//     const newDate = new Date();
//     newDate.setHours(newDate.getHours() + 7);
//     try {
//         const updatedBook = await prisma.book.update({
//             where: {
//                 bookId: parseInt(bookId),
//             },
//             data: {
//                 bookname: bookname,
//                 author: author,
//                 price: parseFloat(price),
//                 cover: cover,
//                 synopsis: synopsis,
//                 date: newDate,
//                 category: category,
//             },
//         });
//         res.send({ success: true, message: "แก้ไขสำเร็จ", updatedBook });
//     } catch (error) {
//         res.send({ success: false, message: "query error", error: error });
//     }
// }

import excuteQuery from "@/shared/database";
export default async function (req, res) {
    const { bookId, bookname, author, price, cover, synopsis, date, category } = req.body;
    const newDate = new Date();
    try {
        const existingCate = await excuteQuery({
            query: "select categoryId from category where categoryName = ?",
            values: [category],
        });
        if (existingCate.length === 0) {
            var addCat = await excuteQuery({
                query: "INSERT INTO `category`(`categoryName`) VALUES (?)",
                values: [category],
            });
        }
        const Sql = await excuteQuery({
            query: "UPDATE book SET bookname = ?, author = ?, price = ?, cover = ?, synopsis = ?, date = ?, category = (SELECT categoryId FROM category WHERE categoryName = ?) where bookId = ?",
            values: [
                bookname,
                author,
                Number(price),
                cover,
                synopsis,
                newDate,
                category,
                bookId,
            ],
        });

        const responseData = {
            addCat: addCat,
            Sql: Sql,
        };
        res.status(200).json(responseData);
    } catch (error) {
        res.status(500).json("Something went wrong")
    }
}
