import excuteQuery from "@/shared/database";

export async function getBookById(bookId) {
    const result = await excuteQuery({
        query: "SELECT bookId FROM `book` WHERE bookId = ?",
        values: [bookId],
    });
    return result;
}

export async function getCategoryByName(categoryName) {
    const result = await excuteQuery({
        query: "SELECT categoryId FROM category WHERE categoryName = ?",
        values: [categoryName],
    });
    return result;
}

export async function addCategory(categoryName) {
    const result = await excuteQuery({
        query: "INSERT INTO `category`(`categoryName`) VALUES (?)",
        values: [categoryName],
    });
    return result;
}

export async function createBook(columns) {
    const result = await excuteQuery({
        query:
            "INSERT INTO book ( date, bookId, bookname, author, price, cover, synopsis, category ) VALUES(?,?,?,?,?,?,?,(SELECT categoryId FROM category WHERE categoryName = ?))",
        values: [new Date(), ...columns],
    });
    return result;
}

export default async function handler(req, res) {
    const { bookId, bookname, author, price, cover, synopsis, categoryName } = req.body;
    const columns = [bookId, bookname, author, price, cover, synopsis, categoryName];

    try {
        if (!bookId || !bookname || !author || !price || !cover || !categoryName) {
            return res.status(400).json("กรุณากรอกข้อมูลให้ครบ");
        }
        if (
            !Number.isInteger(parseInt(bookId)) ||
            isNaN(price) ||
            bookId < 0 ||
            price < 0
        ) {
            return res.status(400).json("กรุณากรอกข้อมูลให้ถูกต้อง");
        }
        const existingBook = await getBookById(bookId);
        if (existingBook.length > 0) {
            return res.status(401).json("หนังสือมีอยู่แล้ว");
        }

        const existingCate = await getCategoryByName(categoryName);
        if (existingCate.length === 0) {
            var addCategoryResult = await addCategory(categoryName);
        }

        const createBookResult = await createBook(columns);

        const response = {
            res1: addCategoryResult,
            res2: createBookResult,
        };
        res.status(200).json(response);
    } catch (error) {
        console.log(error)
        return res.status(500).json(`เกิดข้อผิดพลาด โปรดลองใหม่อีกครั้ง`);
    }
}

