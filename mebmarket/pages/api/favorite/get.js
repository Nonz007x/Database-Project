import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const data = req.body.username;
    const Sql = await excuteQuery({
        query: "SELECT * FROM book  WHERE bookId IN (SELECT favorite.bookId FROM favorite WHERE favorite.username = ?) ORDER BY (SELECT favorite.favDate FROM favorite  WHERE favorite.username = ? AND favorite.bookId = book.bookId) DESC;",
        values: [data,data],
    });
    res.send(Sql);
}
