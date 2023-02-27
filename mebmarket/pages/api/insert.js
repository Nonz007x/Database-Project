// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const { username, password , repassword, acceptTnC} = req.body;
    try {
        let errorMessage = '';

        if (username === '' || password === '') {
            errorMessage = 'Please fill in all fields';
        } else if (/\W/.test(username)) {
            errorMessage = 'Username must not contain special characters';
        } else if (password !== repassword) {
            errorMessage = 'Passwords do not match';
        } else if (!acceptTnC) {
            errorMessage = 'Please accept the terms and conditions';
        }

        if (errorMessage !== '') {
            res.json(errorMessage)
            console.log(res.json(errorMessage))
            return;
        }
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