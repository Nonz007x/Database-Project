import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const { username, bookId } = req.body;
    const Sql = await excuteQuery({
        query: "SELECT * FROM order_items_table WHERE bookId = ? && orderId IN (SELECT orderId FROM invoices WHERE username = ?)",
        values: [bookId, username],
    });
    res.send(Sql);
}
