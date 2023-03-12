import excuteQuery from "@/shared/database";
export default async function handle(req, res) {
    const data = req.body;
    const Sql = await excuteQuery({
        query: "delete from favorite where username = ? and bookId = ? ",
        values: [data.username, data.bookId],
    });
    res.send(Sql);
}
