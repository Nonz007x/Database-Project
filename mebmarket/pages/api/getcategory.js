import excuteQuery from "@/shared/database";

export default async function handleChange(req,res) {
    const Sql = await excuteQuery({query:"select * from category"});
    res.send(Sql);
}