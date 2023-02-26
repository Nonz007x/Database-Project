// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import excuteQuery from '@/shared/database';

export default async function handler(req, res) {
    const sqlSelect = await excuteQuery({ query: 'SELECT DISTINCT * FROM book INNER JOIN author ON book.author = author.authorId' });
    res.send(sqlSelect);
}
