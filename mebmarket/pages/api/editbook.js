import excuteQuery from "@/shared/database";

export async function getCategoryByName(category) {
    const result = await excuteQuery({
        query: "SELECT categoryId FROM category WHERE categoryName = ?",
        values: [category]
    });
    return result;
}

export async function addCategory(category) {
    const result = await excuteQuery({
        query: "INSERT INTO `category`(`categoryName`) VALUES (?)",
        values: [category],
    });
    return result;
}

export default async function (req, res) {
    const { bookId, bookname, author, price, cover, synopsis, category } = req.body;
    const newDate = new Date();
    const values = [bookname, author, price, cover, synopsis, newDate, category, bookId]

    try {
        const existingCate = await getCategoryByName(category);
        if (existingCate.length === 0) {
            var addCategoryResult = await addCategory(category);
        }

        const editBook = await excuteQuery({
            query: "UPDATE book SET bookname = ?, author = ?, price = ?, cover = ?, synopsis = ?, date = ?, category = (SELECT categoryId FROM category WHERE categoryName = ?) where bookId = ?",
            values: values,
        });

        const response = {
            res1: addCategoryResult,
            res2: editBook
        };
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json("Internal Server Error");
    }
}
