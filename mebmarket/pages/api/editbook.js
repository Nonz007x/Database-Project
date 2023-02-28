import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const { bookId, bookname, author, price, cover, synopsis, date } = req.body;
    try {
        const sql = await excuteQuery({
            query:
                "UPDATE `book` SET `bookname` = '?', `author` = '?', `price` = '?', `cover` = '?', `synopsis` = '?', `date` = '?' WHERE `bookId` = ?",
            values: [bookname, author, price, cover, synopsis, date, bookId],
        });
        return res.status(201).json("แก้ไขสำเร็จ",sql);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server Error');
    }
}