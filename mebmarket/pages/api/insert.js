// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const { username, password } = req.body;
    try {
        const sqlSelect = await excuteQuery({
            query: 'SELECT username FROM user WHERE username = ?',
            values: [username]
        });
        if (sqlSelect.length > 0) {
            return res.status(409).json('Username นี้ถูกใช้งานแล้ว');
        }
        await excuteQuery({
            query: 'INSERT INTO user (username, password) VALUES (?, ?)',
            values: [username, password]
        });
        console.log('User added to database:', { username, password });
        return res.status(201).json('สมัครสมาชิกสำเร็จ');
    } catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
}