// import excuteQuery from "@/shared/database";
// import mysql from 'serverless-mysql';

// const db = mysql({
//     config: {
//         host: process.env.MYSQL_HOST,
//         port: process.env.MYSQL_PORT,
//         database: process.env.MYSQL_DATABASE,
//         user: process.env.MYSQL_USER,
//         password: process.env.MYSQL_PASSWORD
//     }
// });

// export default async function handler(req, res) {
//     const { SelectedItem, username, totalPrice } = req.body;
//     const date = new Date();
//     const length = SelectedItem.length
//     const queries = [{
//         query: 'INSERT INTO order_table (username, dateOrdered, totalAmount) VALUES (?, ?, ?);',
//         values: [username, date, totalPrice],
//     },
//     {
//         query: 'INSERT INTO order_items_table (orderId, bookId, price) VALUES (?,?,?)',
//     },
//     {
//         query: 'DELETE FROM `cart_inventory` WHERE bookId = ? AND username = ?',
//     },
//     ];

//     const sql = await excuteQuery({
//         query: 'SELECT MAX(orderId) FROM order_table',
//     })
//     let maxOrderId = sql[0]['MAX(orderId)'];
//     if (maxOrderId === null) {
//         maxOrderId = 1;
//     }
//     let results = db.transaction().query(queries[0].query, queries[0].values)
//     try {

//         for (let i = 0; i < length; i++) {
//             if(SelectedItem[i] !== null && SelectedItem[i] !== '' && SelectedItem[i] !== undefined) {
//                 results = results.query(queries[1].query, [maxOrderId+1, SelectedItem[i].bookId, SelectedItem[i].price]).query(queries[2].query, [SelectedItem[i].bookId, username]);
//             }
//         }
//         await results.commit();
//     } catch (error) {
//         results.rollback();
//         res.status(500).json("Something went wrong")
//         throw error;
//     } finally {
//         await db.end();
//     }
//     res.json(results)

// }

import mysql from 'serverless-mysql';

const db = mysql({
    config: {
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD
    }
});

export default async function handler(req, res) {
    const { SelectedItem, username, totalPrice } = req.body;
    const date = new Date();
    const length = SelectedItem.length;
    const getOrderId = await db.query('SELECT MAX(orderId) FROM order_table')
    let maxOrderId = getOrderId[0]['MAX(orderId)'];
    if (maxOrderId === null) {
        maxOrderId = 1;
        await db.query('ALTER TABLE order_table AUTO_INCREMENT = 1')
    } else {
        maxOrderId++;
    }

    const orderItems = [];
    const cartItemsToDelete = [];
    for (let i = 0; i < length; i++) {
        if (SelectedItem[i] !== null && SelectedItem[i] !== '' && SelectedItem[i] !== undefined) {
            orderItems.push([maxOrderId, SelectedItem[i].bookId, SelectedItem[i].price]);
            cartItemsToDelete.push([SelectedItem[i].bookId, username]);
        }
    }

    try {
        var result = db.transaction()
            .query('INSERT INTO order_table (username, dateOrdered, totalAmount) VALUES (?, ?, ?)', [username, date, totalPrice])
            .query('INSERT INTO order_items_table (orderId, bookId, price) VALUES ?', [orderItems])
            .query('DELETE FROM `cart_inventory` WHERE (bookId, username) IN (?)', [cartItemsToDelete]);
        await result.commit();
    } catch (error) {
        result.rollback();
        res.status(500).json("Something went wrong")
        throw error;
    } finally {
        await db.end();
    }
    res.status(200).json(result);
}