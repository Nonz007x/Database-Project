import excuteQuery from '@/shared/database'

export default async function handler(req, res) {
    try {
        const book = await excuteQuery({
            query: "SELECT bookId, bookname, author, cover, rating, price, category.categoryName FROM `book` LEFT JOIN `category` ON book.category = category.categoryId ORDER BY rating DESC LIMIT 6;"
        })
        res.json(book)
    } catch (error) {
        res.status(500).json("Internal Server Error")
    }
}