import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const { username } = req.body;
    const Sql = await excuteQuery({
        query: "select * from book where bookId in (select bookId from order_items_table where orderId in (select orderId from order_table where username = ?))",
        values:[username],
    });
    res.send(Sql)
}
