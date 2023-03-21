import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const {amount} = req.body
    const {page} = req.body
    const Sql = await excuteQuery({
        query: "SELECT comment.*,bookname,avatar FROM comment JOIN user on comment.username = user.username JOIN book ON book.bookId = comment.bookId ORDER BY `comment`.`time` DESC limit ?,?",
        values: [amount * (page - 1), Number(amount)],
    });
    res.send(Sql);
}
