// import { PrismaClient } from "@prisma/client";
import excuteQuery from "@/shared/database";
// const prisma = new PrismaClient();

export default async function handler(req, res) {
    const {id} = req.query
    const book = await excuteQuery({
        query: "SELECT * FROM book LEFT JOIN `category` ON book.category = category.categoryId where book.bookid = ?",
        values: [id]
    });
    res.json(book);
}

// export default async function handler(req, res) {
//     const sqlSelect = await prisma.book.findMany();
//     res.json(sqlSelect);
// }
