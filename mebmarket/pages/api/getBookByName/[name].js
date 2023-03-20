import excuteQuery from '@/shared/database';

export default async function handler(req, res) {
    try {
        const data = req.query;
        const book = await excuteQuery({
            query: 'SELECT * FROM `book` LEFT JOIN category ON book.category = category.categoryId WHERE bookname = ?',
            values: [data.name]
        });
        res.send(book[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: 'Internal server error' });
    }
}