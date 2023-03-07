// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import excuteQuery from "@/shared/database";
import { use } from "react";

export default async function handler(req, res) {
    const {comment} = req.body;
    const {rating} = req.body;
    const {username} = req.body;
    const {bookId} = req.body
    console.log(comment,rating,username,bookId);
    const sqlSelect = await excuteQuery({
        query: "INSERT INTO `comment` (`bookId`, `username`, `comment`,`rating`) VALUES (?,?,?,?);",
        values: [bookId,username,comment,rating]
    });
    //  if (res.status !== 200) {
    //     throw new Error(res.message);
    //   }
    res.send(sqlSelect);
}
