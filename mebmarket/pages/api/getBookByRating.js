import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
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
                rating: 'desc',
            },
            take: 6,
        })
        res.json(books)
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal Server Error')
    }
}