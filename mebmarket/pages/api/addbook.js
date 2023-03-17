import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const { bookId, bookname, author, price, cover, synopsis, categoryName } = req.body;
    const columns = [bookId, bookname, author, price, cover, synopsis, categoryName];
    const newDate = new Date();
    try {
        if (!bookId || !bookname || !author || !price || !cover || !categoryName) {
            return res.status(400).json("กรุณากรอกข้อมูลให้ครบ");
        }
        if (!Number.isInteger(parseInt(bookId)) || isNaN(price) || bookId < 0 || price < 0) {  //isNaN = is NOT an integer
            return res.status(400).json("กรุณากรอกข้อมูลให้ถูกต้อง");
        }
        const existingBook = await excuteQuery({
            query: "SELECT bookId FROM `book` WHERE bookId = ?",
            values: [bookId],
        });
        if (existingBook.length > 0) {
            return res.status(401).json("หนังสือมีอยู่แล้ว");
        }
        const existingCate = await excuteQuery({
            query: "select categoryId from category where categoryName = ?",
            values: [categoryName],
        });
        if (existingCate.length === 0) {
            var addCategory = await excuteQuery({
                query: "INSERT INTO `category`(`categoryName`) VALUES (?)",
                values: [categoryName],
            });
        }
        const createBook = await excuteQuery({
            query: "INSERT INTO book ( date, bookId, bookname, author, price, cover, synopsis, category ) VALUES(?,?,?,?,?,?,?,(SELECT categoryId FROM category WHERE categoryName = ?))",
            values: [newDate, ...columns],
        });

        const response = {
            res1: addCategory,
            res2: createBook,
        };

        res.status(200).json(response);
    } catch (error) {
        return res.status(500).json(`เกิดข้อผิดพลาด โปรดลองใหม่อีกครั้ง`);
    }
}

