import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const book = await excuteQuery({
        query: "SELECT * FROM book LEFT JOIN `category` ON book.category = category.categoryId"
    })
    res.json(book)
}