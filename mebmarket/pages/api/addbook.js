import excuteQuery from "@/shared/database";

export default async function handler(req,res){
    const {bookId,bookname,author,price,cover,synopsis,date} = req.body;
    try{
        const sql =await excuteQuery({
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