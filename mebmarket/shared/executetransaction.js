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

async function executeTransaction(queries) {
    let results = null;
    try {
        results = db.transaction().query(queries[0].query, queries[0].values);
        for (let i = 1; i < queries.length; i++) {
            results = results.query(queries[i].query, queries[i].values);
        }

        await results.commit();
    } catch (error) {
        results.rollback();
        throw error;
    } finally {
        await db.end();
    }
    return results;
}

export default executeTransaction;