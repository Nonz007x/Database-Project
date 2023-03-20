import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const {id} = req.query
    const book = await excuteQuery({
        query: "SELECT * FROM book LEFT JOIN `category` ON book.category = category.categoryId where book.bookid = ?",
        values: [id]
    });
    res.json(book);
}
