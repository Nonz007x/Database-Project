import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const { amount } = req.body;
    const { page } = req.body;
    const Sql = await excuteQuery({
        query: "select username,email,firstname,lastname,role,avatar,valid from user limit 0,5",
        values: [amount * (page - 1), Number(amount)],
    });
    res.send(Sql);
}
