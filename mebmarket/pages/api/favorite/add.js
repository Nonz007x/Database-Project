import excuteQuery from "@/shared/database";
export default async function handle(req, res) {
    const data = req.body;
    const Sql = await excuteQuery({
        query: "insert into favorite(username,bookId) values(?,?) ",
        values: [data.username, data.bookId],
    });
    res.send(Sql);
}
