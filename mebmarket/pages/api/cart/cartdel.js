import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const { bookId,username } = req.body;
    const Sql = await excuteQuery({
        query: "delete from cart_inventory where bookId= ? and username = ? ",
        values: [bookId,username],
    });
    res.send(Sql);
}
