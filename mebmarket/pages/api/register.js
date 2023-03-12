// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//     const { username, password, email } = req.body;
//     const forbiddenNames = ["undefined"];
//     console.log(email);
//     try {
//         const existingUser = await prisma.user.findFirst({
//             where: {
//                 OR: [
//                     { username: { equals: username.toLowerCase() } },
//                     { email: { equals: email } }
//                 ]
//             }
//         });

//         if (existingUser) {
//             if (existingUser.username === username) {
//                 return res.status(200).json(0);
//             } else if (existingUser.email === email) {
//                 return res.status(200).json(1);
//             }
//         }
//         await prisma.user.create({
//             data: {
//                 username: username.toLowerCase(),
//                 email: email.toLowerCase(),
//                 password: password,
//                 firstname: "name",
//                 lastname: "lastname",
//             }
//         });

//         return res.status(201).json('สมัครสมาชิกสำเร็จ');
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json('Internal Server Error');
//     }
// }

import excuteQuery from "@/shared/database";

export default async function handler(req, res) {
    const { username, password, email } = req.body;
    const forbiddenNames = ["undefined", "admin", "example"];

    if (forbiddenNames.includes(username)) {
        return res.status(400).json("ไม่สามารถใช้ชื่อนี้ได้");
    }
    const queries = [
        {
            query: "SELECT username, email FROM user WHERE username = ? OR email = ?",
            values: [username.toLowerCase(), email.toLowerCase()],
        },
        {
            query: "INSERT INTO user (uesrname, password, email) VALUES (?,?,?)",
            values: [username.toLowerCase(), email.toLowerCase(), password]
        },
    ]
    try {
        const registerCheck = await excuteQuery({ query: queries[0].query, values: queries[0].values })

        if (registerCheck.length > 0) {
            if (registerCheck[0].username.toLowerCase() === username.toLowerCase()) {
                return res.status(409).json(0) // Username นี้ถูกใช้งานแล้ว
            } else if (registerCheck[0].email.toLowerCase() === email.toLowerCase()) {
                return res.status(409).json(1) // Email นี้ถูกใช้งานแล้ว
            }
        }
        const result = await excuteQuery({ query: queries[1].query, values: queries[1].values })
        res.status(200).json(result);
    } catch (error) {
        return res.status(500).json('Internal Server Error');
    }
}