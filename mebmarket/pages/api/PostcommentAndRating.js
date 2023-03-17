import executeTransaction from "@/shared/executetransaction";

export default async function handler(req, res) {
    try {
        const newDate = new Date();
        newDate.setHours(newDate.getHours());
        const { comment, rating, username, bookId } = req.body;
        const queries = [
            {
                query: "INSERT INTO `comment` (`bookId`, `username`, `comment`,`rating`,`time`) VALUES (?,?,?,?,?);",
                values: [bookId, username, comment, rating, newDate],
            },
            {
                query: "UPDATE `book` SET `rating` = (SELECT AVG(rating) FROM comment WHERE bookId = ?) where book.bookId = ?",
                values: [bookId, bookId],
            }
        ]

        const addComment = executeTransaction(queries);
        res.json(addComment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}
