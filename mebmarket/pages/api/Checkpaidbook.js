import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const { username, bookId } = req.body;
    const Sql = await excuteQuery({
        query: "select * from order_items_table where bookId = ? && orderId in (select orderId from order_table where username = ?)",
        values: [Number(bookId), username],
    });
    res.send(Sql);
}
