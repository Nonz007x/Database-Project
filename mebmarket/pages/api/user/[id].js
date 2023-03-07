// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import excuteQuery from '@/shared/database';

export default async function handler(req, res) {
    const { id } = req.query
    const sqlSelect = await excuteQuery({
        query: 'SELECT * FROM user where username = ?;',
        values: [id]
    });
    //  if (response.status !== 200) {
    //     throw new Error(res.message);
    //   }
    res.send(sqlSelect);
}
