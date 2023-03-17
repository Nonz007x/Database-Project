import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const Sql = await excuteQuery({
        query: "SELECT comment.*,bookname FROM comment JOIN book ON book.bookId = comment.bookId ORDER BY `comment`.`time` DESC",
    });
    res.send(Sql);
}
