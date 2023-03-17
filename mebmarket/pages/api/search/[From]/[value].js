import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const { From, value } = req.query;
    try {
        console.log(From)
        console.log(value)
        const books = await excuteQuery({
            query: `SELECT * FROM book WHERE ?? LIKE CONCAT('%', ?, '%')`,
            values: [From, value],
        })
        console.log(books)
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json("Internal Server Error");
    }
}