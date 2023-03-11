import excuteQuery from "@/shared/database";
export default async function handle(req, res) {
    const data = req.body;
    console.log(data);
    const Sql = await excuteQuery({
        query: "insert into favorite(username,bookId) values(?,?) ",
        values: [data.username, data.bookId],
    });
    console.log(Sql);
    res.send(Sql);
}
