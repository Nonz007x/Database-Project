import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const { page } = req.body;
    const { amount } = req.body;
    const sql = await excuteQuery({
        query: "select * from `book` LEFT JOIN `category` ON book.category = category.categoryId ORDER BY bookId ASC LIMIT ?,?",
        values: [amount * (page - 1), Number(amount)],
    });
    res.send(sql);
}
