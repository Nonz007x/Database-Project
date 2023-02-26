import excuteQuery from '@/shared/database';

export default async function handler(req, res) {
    const data = req.query;
    const sqlSelect = await excuteQuery(
        { query: 'SELECT DISTINCT * FROM book INNER JOIN author ON book.author = author.authorId WHERE bookname = ?',
        values: [data.id] });
    res.send(sqlSelect);
    // res.send(data.id);
}