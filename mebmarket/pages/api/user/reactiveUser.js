import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const { username } = req.body;
    const sql = await excuteQuery({
        query: "update user set valid = 1 where username = ?",
        values: [username],
    });
    res.send(sql);
}
