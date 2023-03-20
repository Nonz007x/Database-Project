import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const { username } = req.body;
    const Sql = await excuteQuery({
        query: "SELECT * FROM book where bookId IN (SELECT bookId FROM order_items_table WHERE orderId IN (SELECT orderId FROM invoices WHERE username = ?))",
        values:[username],
    });
    res.send(Sql)
}
