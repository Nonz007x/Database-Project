// import excuteQuery from "@/shared/database";

// export default async function handler(req, res) {
//     try {
//         const { username, bookId, price } = req.body;
//         const newDate = new Date();
//         const cartCheck = await excuteQuery({
//             query: "SELECT FROM `cart_inventory` WHERE username = ? && bookId = "
//         })
//         const addtocart = await excuteQuery({
//             query: "INSERT INTO `cart_inventory` (username, bookId, price, createDate) VALUES (?,?,?,?)",
//             values: [username, bookId, price, newDate],
//         });
//         console.log("successful")
//         res.json(addtocart)
//     } catch (error) {

//     }

// }

import executeTransaction from "@/shared/executetransaction";

export default async function handler(req, res) {
    try {
        const { username, bookId, price } = req.body;
        const newDate = new Date();
        const queries = [
            {
                query: 'SELECT bookId FROM `cart_inventory` WHERE username = ? && bookId = ?',
                values: [username, bookId]
            },
            {
                query: 'INSERT INTO `cart_inventory` (username, bookId, price, createDate) VALUES (?,?,?,?)',
                values: [username, bookId, price, newDate],
            }
        ]

        const result = executeTransaction(queries);

        console.log("successful");
        res.json(result); // Return the result of the second query (INSERT INTO)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}