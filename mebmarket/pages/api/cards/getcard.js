import excuteQuery from "@/shared/database";

export default async function (req, res) {
    const { username } = req.body;
    const getcard = await excuteQuery({
        query: "SELECT * FROM `creditcard` WHERE username = ?",
        values: [username],
    })
    res.json(getcard);
}
