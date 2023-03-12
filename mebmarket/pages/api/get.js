// import { PrismaClient } from "@prisma/client";
import excuteQuery from "@/shared/database";
// const prisma = new PrismaClient();

export default async function handler(req, res) {
    const book = await excuteQuery({
        query: "SELECT * FROM book LEFT JOIN `category` ON book.category = category.categoryId"
    })
    res.json(book)
}

// export default async function handler(req, res) {
//     const sqlSelect = await prisma.book.findMany();
//     res.json(sqlSelect);
// }
