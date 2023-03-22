import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    try {
        const { username, bookId, price } = req.body;

        if (username === 'undefined' || username === '') {
            return res.status(401).json("กรุณาเข้าสู่ระบบ");
        }
        const newDate = new Date();
        const queries = [
            {
                query: 'SELECT bookId FROM `cart_inventory` WHERE username = ? && bookId = ?',
                values: [username, bookId]
            },
            {
                query: 'INSERT INTO `cart_inventory` (username, bookId, createDate) VALUES (?,?,?)',
                values: [username, bookId, newDate],
            }
        ]

        const cartCheck = await excuteQuery({ query: queries[0].query, values: queries[0].values });
        if (cartCheck.length > 0) {
            return res.status(409).json("เพิ่มหนังสือไปแล้ว");
        }
        const result = await excuteQuery({ query: queries[1].query, values: queries[1].values });
        console.log(result)
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error");
    }
}