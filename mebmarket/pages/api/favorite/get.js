import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const data = req.body.username;
    const Sql = await excuteQuery({
        query: "select * from book where bookId = (select bookId from favorite where username = ?)",
        values: [data],
    });
    res.send(Sql);
}
