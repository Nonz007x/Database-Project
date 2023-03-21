import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const sql = await excuteQuery({
        query: "SELECT COUNT(*) as total FROM user;",
    });
    res.send(sql[0].total);
}
