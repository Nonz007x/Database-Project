import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const {bookId} = req.query
    const sqlSelect = await excuteQuery({
        query: "SELECT bookId,comment.username,comment,rating,time,avatar FROM comment inner join user on comment.username = user.username where `bookId` = ? order by `time` desc",
        values: [bookId]
    });
    res.send(sqlSelect);
}
