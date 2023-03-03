import excuteQuery from '@/shared/database';

export default async function handler(req, res) {
    try {
        const data = req.query;
        const sqlSelect = await excuteQuery({
            query: 'SELECT * FROM book WHERE bookId = ?',
            values: [data.id]
        });
        console.log(data.id)
        res.send({ success: true, message: 'successfully fetched', sqlSelect });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: 'Internal server error' });
    }
}