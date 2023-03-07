// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const {comment} = req.body;
    const {rating} = req.body;
    const {username} = req.body;
    const {bookId} = req.body
    const sqlSelect = await excuteQuery({
        query: "insert into `comment` (`bookId`, `username`, `comment`,`rating`) values ([?],[?],[?],[?]);",
        values: [bookId,username,comment,rating]
    });
    //  if (res.status !== 200) {
    //     throw new Error(res.message);
    //   }
    res.send(sqlSelect);
}
