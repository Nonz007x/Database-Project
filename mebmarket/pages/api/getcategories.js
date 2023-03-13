import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const categories = await excuteQuery({
        query: "SELECT * FROM `category` "
    })
    res.json(categories);
}