import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const sqlSelect = await excuteQuery({ query: 'SELECT * FROM comment'});
    res.send(sqlSelect);
}