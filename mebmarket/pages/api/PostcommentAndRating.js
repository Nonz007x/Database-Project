import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    try {
        const newDate = new Date();
        newDate.setHours(newDate.getHours());
        const { comment, rating, username, bookId } = req.body;

        const sqlSelect = await excuteQuery({
            query: "INSERT INTO `comment` (`bookId`, `username`, `comment`,`rating`,`time`) VALUES (?,?,?,?,?);",
            values: [bookId, username, comment, rating, newDate],
        });

        const sqlUpdate = await excuteQuery({
            query: "UPDATE `book` SET `rating` = (SELECT AVG(rating) FROM comment WHERE bookId = ?) where book.bookId = ?",
            values: [bookId, bookId],
        });

        const responseData = {
            sqlSelect: sqlSelect,
            sqlUpdate: sqlUpdate,
        };

        res.json(responseData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}
