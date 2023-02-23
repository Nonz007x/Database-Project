// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import excuteQuery from "@/shared/database";

export default function handler(req, res) {
    const username = req.body.Username;
    const password = req.body.Password;
    const result = excuteQuery({
        query: 'INSERT INTO user (username,password) VALUE (?,?)',
        values: [username, password]
    });
    // console.log(result);
}