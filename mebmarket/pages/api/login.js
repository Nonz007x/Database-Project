import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const { username, password } = req.body;
    const user = await excuteQuery({
        query: "SELECT * FROM user WHERE username = ? AND password = ?",
        values: [username, password],
    })
    res.json(user[0]);
}
