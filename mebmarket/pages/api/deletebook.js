import excuteQuery from '@/shared/database';
export default async function handler(req , res) {
    const { bookId } = req.body;
    const deletedBook = await excuteQuery({
        query: "DELETE FROM `book` WHERE bookid = ?",
        values: [bookId],
    })
    res.json(deletedBook);
}