import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const data = req.body;
    const Sql = await excuteQuery({
        // query: "select * from book where bookId IN (SELECT bookId FROM favorite where username = ?)",
        query: "SELECT COUNT(*) > 0 AS rowExists FROM favorite WHERE username = ? && bookId = ?;",
        values: [data.username, Number(data.bookId)],
    });
    res.send(Sql);
}
