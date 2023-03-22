import excuteQuery from "@/shared/database";

export default async function handler(req ,res) {
    const { page } = req.query;
    const itemsPerPage = 10;
    const itemStart = itemsPerPage * ( page - 1);
    const columns = ['bookname', 'author', 'cover', 'rating', 'price', 'category.categoryName'];
    try {
        const books = await excuteQuery({
            query: `SELECT ?? FROM book LEFT JOIN category ON book.category = category.categoryId ORDER BY rating DESC LIMIT ${itemStart}, ${itemsPerPage}`,
            values: [columns],
        })
        res.status(200).json(books);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error")
    }
}
