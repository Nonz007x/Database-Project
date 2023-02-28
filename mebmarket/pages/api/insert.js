// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const { username, password, email } = req.body;
    try {
        const sqlSelectUsername = await excuteQuery({
            query: 'SELECT username FROM user WHERE username = ?',
            values: [username]
        });
        if (sqlSelectUsername.length > 0) {
            return res.status(200).json(0);
        }
        const sqlSelectEmail = await excuteQuery({
            query: "SELECT * FROM user WHERE email = ?",
            values: [email]
        });
        if (sqlSelectEmail.length > 0) {
            return res.status(200).json(1);
        }

        await excuteQuery({
            query: 'INSERT INTO user (username, email, password) VALUES (?, ?, ?)',
            values: [username, email , password]
        });
        console.log('User added to database:', { username, email, password });
        return res.status(201).json('สมัครสมาชิกสำเร็จ');
    } catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
}