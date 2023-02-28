import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const { bookId } = req.body;
    const sqlSelect = await excuteQuery({
        query: 'DELETE FROM book WHERE bookId = ?',
        values: [bookId]
    });
    res.send(sqlSelect)
}