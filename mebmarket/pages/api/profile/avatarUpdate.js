import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const { avatarUrl, username } = req.body;
    const sql = await excuteQuery({
        query: "update user set avatar = ? where username = ?",
        values: [avatarUrl, username],
    });
    res.send(sql);
}
