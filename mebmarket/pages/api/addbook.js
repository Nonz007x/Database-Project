import excuteQuery from "@/shared/database";
export default async function handler(req,res){
    const {bookname,cover,author,synopsis,date} = req.body;
    try{
        const sql =await excuteQuery({
            query: ""
        })
        return res.status(201).json('เพิ่มหนังสือสำเร็จ',sql);
    }
    catch(error){
        console.log(error)
        return res.status(500).json('Internal Server Error')
    }

}