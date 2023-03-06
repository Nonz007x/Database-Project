import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const {page} = req.query;
    const itemsPerPage = 10;
    try {
        const books = await prisma.book.findMany({
            select: {
                bookname: true,
                author: true,
                cover: true,
                rating: true,
                price: true,
            },
            orderBy: {
                date: 'desc',
            },
            skip: (itemsPerPage*(page-1)) ,                                                                                                                                                                                                                                                                                                                                                              
            take: itemsPerPage,
        })
        res.json(books)
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal Server Error')
    }
}