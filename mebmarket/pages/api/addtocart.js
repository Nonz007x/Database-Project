import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    try {
        const { item } = req.body;
        const addtocart = excuteQuery({ 
            query: "INSERT INTO `cart_inventory` (username, bookId, price, createDate) VALUES (?,?,?,?)",
            values: [], 
    });
    } catch (error) {

    }

}