import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const { username, role } = req.body;
    const sql = await excuteQuery({
        query: "update user set role = ? where username = ?",
        values: [role, username],
    });

    res.send(sql);
}
