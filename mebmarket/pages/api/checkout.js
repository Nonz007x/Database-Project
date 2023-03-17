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
    const getOrderId = await db.query('SELECT MAX(orderId) AS id FROM invoices')
    let maxOrderId = getOrderId[0].id;
    if (maxOrderId === null) {
        maxOrderId = 1;
        await db.query('ALTER TABLE invoices AUTO_INCREMENT = 1')
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
            .query('INSERT INTO invoices (username, dateOrdered, totalAmount) VALUES (?, ?, ?)', [username, date, totalPrice])
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