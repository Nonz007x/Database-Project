// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import excuteQuery from "@/shared/database";

export default function handler(req, res) {
    const MovieName = req.body.MovieName;
    const MovieReview = req.body.MovieReview;

    const result = excuteQuery({
        query: 'INSERT INTO movie_table (MovieName,MovieReview) VALUE (?,?)',
        values: [MovieName, MovieReview]

    });
    console.log(result);
}
