// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import excuteQuery from '@/shared/database';

export default async function handler(req, res) {
    const {From, value} = req.query
    const sqlSelect = await excuteQuery({ query: `SELECT * FROM book WHERE ${From} LIKE CONCAT('%', ?, '%')`,
        values: [value]
});
    // if (res.status !== 200) {
    //     throw new Error(res.message);
    // }
    res.send(sqlSelect);
}
