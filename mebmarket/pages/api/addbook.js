import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const { bookId, bookname, author, price, cover, synopsis, categoryName } =
        req.body;
    const newDate = new Date();
    try {
        if (
            !bookId ||
            !bookname ||
            !author ||
            !price ||
            !cover ||
            !categoryName
        ) {
            return res.status(400).json("กรุณากรอกข้อมูลให้ครบ");
        }
        if (
            !Number.isInteger(parseInt(bookId)) ||
            isNaN(price) ||
            bookId < 0 ||
            price < 0
        ) {
            //isNaN = is NOT an integer
            return res.status(400).json("กรุณากรอกข้อมูลให้ถูกต้อง");
        }
        const existingBook = await excuteQuery({
            query: "SELECT bookId FROM `book` WHERE bookId = ?",
            values: [bookId],
        });
        // console.log(existingBook);
        if (existingBook.length > 0) {
            return res.status(401).json("หนังสือมีอยู่แล้ว");
        }
        const existingCate = await excuteQuery({
            query: "select categoryId from category where categoryName = ?",
            values: [categoryName],
        });
        if (existingCate.length === 0) {
            var addCat = await excuteQuery({
                query: "INSERT INTO `category` (`categoryName`) VALUES (?)",
                values: [categoryName],
            });
        }
        const createBook = await excuteQuery({
            query: "INSERT INTO book ( bookId, bookname, author, price, cover, synopsis, date, category ) VALUES(?,?,?,?,?,?,?,(SELECT categoryId FROM category WHERE categoryName = ?))",
            values: [
                bookId,
                bookname,
                author,
                price,
                cover,
                synopsis,
                newDate,
                categoryName,
            ],
        });

           const respond = {
               addCat: addCat,
                createBook: createBook,
            };
        res.json(respond);
    } catch (error) {
        return res.status(500).json(`เกิดข้อผิดพลาด โปรดลองใหม่อีกครั้ง`);
    }
}

// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
// export default async function handler(req, res) {
//     const { bookId, bookname, author, price, cover, synopsis} = req.body;
//     const newDate = new Date();
//     newDate.setHours(newDate.getHours() + 7);
//     try {
//         const existingBook = await prisma.book.findFirst({
//             where: {
//                 bookId: parseInt(bookId),
//             },
//         })
//         if (existingBook) {
//             return res.status(200).json('หนังสือมีอยู่แล้ว');
//         }
//         await prisma.book.create({
//             data: {
//                 bookId: parseInt(bookId),
//                 bookname: bookname,
//                 author: author,
//                 price: parseFloat(price),
//                 cover: cover,
//                 date: newDate,
//                 synopsis: synopsis,
//             }
//         })
//         return res.status(201).json('เพิ่มหนังสือสำเร็จ');
//     }
//     catch (error) {
//         return res.status(500).json('Internal Server Error')
//     }

// }
