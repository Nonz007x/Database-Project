// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import excuteQuery from '@/shared/database';

export default async function handler(req, res) {
    const {username, password} = req.body
    const sqlSelect = await excuteQuery({ query: 'SELECT username,password FROM user WHERE username = ? AND password = ?',
    values: [username, password]
});
    // if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    // }
    res.send(sqlSelect);
}
