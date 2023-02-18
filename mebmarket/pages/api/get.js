// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const sqlSelect = 'SELECT * FROM movie_table'
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
}
