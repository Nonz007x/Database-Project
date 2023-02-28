import excuteQuery from "@/shared/database";

export default async function handler(req,res){
    const {bookId,bookname,author,price,cover,synopsis,date} = req.body;
    try{
        const select = await excuteQuery({
            query: "SELECT bookId FROM `book` WHERE bookId = ?"
            ,values:[bookId]
        })
        if (select.length > 0){
            return res.status(200).json('หนังสือมีอยู่แล้ว',select);
        }
        const sql = await excuteQuery({
            query: "INSERT INTO `book`(`bookId`, `bookname`, `author`, `price`, `cover`, `date`, `synopsis`) VALUES (?,?,?,?,?,?,?)"
            ,values:[bookId,bookname,author,price,cover,date,synopsis]
        })
        return res.status(201).json('เพิ่มหนังสือสำเร็จ',sql);
    }
    catch(error){
        console.log(error)
        return res.status(500).json('Internal Server Error')
    }

}