// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const newDate = new Date();
    newDate.setHours(newDate.getHours());
    const { comment } = req.body;
    const { rating } = req.body;
    const { username } = req.body;
    const { bookId } = req.body;
    console.log(comment, rating, username, bookId);
    const sqlSelect = await excuteQuery({
        query: "INSERT INTO `comment` (`bookId`, `username`, `comment`,`rating`,`time`) VALUES (?,?,?,?,?);",
        values: [bookId, username, comment, rating, newDate],
    });
    const sqlUpdate = await excuteQuery({
        query: "UPDATE `book` SET `rating` = (SELECT AVG(rating) FROM comment WHERE bookId = ?) where book.bookId = ?",
        values: [bookId, bookId],
    });
    //  if (res.status !== 200) {
    //     throw new Error(res.message);
    //   }
    console.log(sqlSelect);
}
