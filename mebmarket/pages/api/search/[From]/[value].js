// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import excuteQuery from '@/shared/database';

export default async function handler(req, res) {
    const {From, value} = req.query
    const sqlSelect = await excuteQuery({ query: `SELECT * FROM book WHERE ${From} LIKE CONCAT('%', ?, '%')`,
        values: [value]
});
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    res.send(sqlSelect);
}
