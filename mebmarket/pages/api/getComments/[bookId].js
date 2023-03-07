import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const newDate = new Date();
    newDate.setHours(newDate.getHours() + 7);
    const {bookId} = req.query
    const sqlSelect = await excuteQuery({
        query: "SELECT * FROM comment where `bookId` = ? order by `time` desc",
        values: [bookId]
    });
    res.send(sqlSelect);
}
