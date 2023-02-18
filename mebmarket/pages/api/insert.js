// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const MovieName = req.body.MovieName;
    const MovieReview = req.body.MovieReview;
    const sqlInsert = 'INSERT INTO movie_table (MovieName,MovieReview) VALUE (?,?)'
    db.query(sqlInsert, [MovieName, MovieReview], (err, result) => {
        console.log(result)
    })
}
