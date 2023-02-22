import excuteQuery from '@/shared/database';
export default async function checklogin(req, res) {
    const username = req.body.Username;
    const password = req.body.Password;
    // const username = "test";
    // const password = "123";
    const sqlSelect = await excuteQuery(
        { query: "select * from user where username = ? && password = ? ",
            values: [username, password] }
    );
    res.send(sqlSelect)
}