import excuteQuery from '@/shared/database';
export default async function checklogin(req, res) {
    const username = req.body.Username;
    const password = req.body.Password;
    const sqlSelect = await excuteQuery(
        { query: "select * from user where username = ? && password = ? ",
            values: [username, password] }
    );
    res.send(sqlSelect)
}