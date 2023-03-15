import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const Sql = await excuteQuery({
        query: "select comment.*,bookname from comment JOIN book on book.bookId = comment.bookId ORDER BY `comment`.`time` DESC",
    });
    res.send(Sql);
}
