import executeTransaction from "@/shared/executetransaction";

export default async function handler(req, res) {
    const { username } = req.body;
    console.log(username)
    const queries = [
        {
            query: "UPDATE user SET valid = 0 WHERE username = ?",
            values: [username],
        },
        {
            query: "DELETE FROM creditcard WHERE username = ?",
            values: [username],
        }
    ]
    try{
        const deleteuser = await executeTransaction(queries);
        res.json(deleteuser);
    } catch(error) {
        console.error(error);
        res.status(500).json("Internal server error")
    }
}
