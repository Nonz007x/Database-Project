import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const count = await excuteQuery({
        query: "SELECT COUNT(bookId) AS total FROM `book`"
    })
    console.log(count[0].total)
    res.json(count[0].total);
}
