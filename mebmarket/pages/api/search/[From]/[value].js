import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { From, value } = req.query;

    try {
        const books = await prisma.book.findMany({
            where: {
                [From]: {
                    contains: value,
                },
            },
        });
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}