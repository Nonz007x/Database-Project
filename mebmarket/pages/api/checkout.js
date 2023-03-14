import excuteQuery from "@/shared/database";
import { executeCheckout } from "@/shared/executetransaction";
import { max } from "moment";
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
    // const { orderId, username, dateOrdered, totalAmount } = req.body;
    const { SelectedItem, username, totalPrice } = req.body;
    const date = new Date();
    const length = SelectedItem.length
    const queries = [{
        query: 'INSERT INTO order_table (username, dateOrdered, totalAmount) VALUES (?, ?, ?);',
        values: [username, date, totalPrice],
    },
    {
        query: 'INSERT INTO order_items_table (orderId, bookId, price) VALUES (?,?,?)',
    },
    ];

    const sql = await excuteQuery({
        query: 'SELECT MAX(orderId) FROM order_table',
    })
    let maxOrderId = sql[0]['MAX(orderId)'];
    if (maxOrderId === null) {
        maxOrderId = 0;
    }
    let results = db.transaction().query(queries[0].query, queries[0].values)
    try {

        for (let i = 0; i < length; i++) {
            if(SelectedItem[i] !== null && SelectedItem[i] !== '' && SelectedItem[i] !== undefined) {
                results = results.query(queries[1].query, [maxOrderId, SelectedItem[i].bookId, SelectedItem[i].price]);
            }
        }
        await results.commit();
    } catch (error) {
        results.rollback();
        throw error;
    } finally {
        await db.end();
    }

}