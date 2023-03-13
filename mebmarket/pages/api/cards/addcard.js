import excuteQuery from "@/shared/database";

export default async function (req, res) {
    const { username, cardNumber, cardHolderName, expiry_month, expiry_year, cvv, billingAddress } = req.body;
    const createDate = new Date();
    try {
        const checkExisting = await excuteQuery({
            query: "SELECT username FROM `creditcard` WHERE username = ?",
            values: [username],
        })

        if (checkExisting.length > 0) {
            return res.status(409).json("เพิ่มบัตรไปแล้ว");
        }
        const addCard = await excuteQuery({
            query: "INSERT INTO `creditcard` (username, cardNumber, cardHolderName, expiry_month, expiry_year, cvv, billingAddress, createDate, updatedDate) VALUES(?,?,?,?,?,?,?,?,?)",
            values: [username, cardNumber, cardHolderName, expiry_month, expiry_year, cvv, billingAddress, createDate, createDate],
        })
        return res.status(200).json(addCard);
    } catch (error) {
        return res.status(500).json("Internal Server Error");
    }
}