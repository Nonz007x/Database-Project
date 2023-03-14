import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const { username } = req.body;
    const Sql = await excuteQuery({
        query: "select bookname,price,bookId,cover from book where bookId  in (select bookId from cart_inventory where username = ?)",
        values: [username],
    });
    res.send(Sql)

}
