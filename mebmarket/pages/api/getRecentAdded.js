// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import excuteQuery from '@/shared/database';

export default async function handler(req, res) {
    const sqlSelect = await excuteQuery(
        { query: 
            'SELECT DISTINCT bookname,author,author.authorName,cover,rating,price FROM book INNER JOIN author ON book.author = author.authorId ORDER BY date DESC LIMIT 0,6;' 
        });
    res.send(sqlSelect);
}
