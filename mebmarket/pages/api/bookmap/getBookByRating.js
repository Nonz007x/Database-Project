// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// export default async function handler(req, res) {
//     try {
//         const books = await prisma.book.findMany({
//             select: {
//                 bookname: true,
//                 author: true,
//                 cover: true,
//                 rating: true,
//                 price: true,
//                 category: true,
//             },
//             orderBy: {
//                 rating: 'desc',
//             },
//             take: 6,
//         })
//         res.json(books)
//     } catch (error) {
//         console.error(error)
//         res.status(500).send('Internal Server Error')
//     }
// }

import excuteQuery from '@/shared/database'

export default async function handler(req, res) {
    try {
        const book = await excuteQuery({
            query: "SELECT bookname, author, cover, rating, price, category.categoryName FROM `book` LEFT JOIN `category` ON book.category = category.categoryId ORDER BY rating DESC LIMIT 6;"
        })
        res.json(book)
    } catch (error) {
        res.status(500).json("Internal Server Error")
    }
}