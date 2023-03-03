import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { username, password, email } = req.body;

    try {
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    {
                        username: {
                            equals: username
                        }
                    },
                    {
                        email: {
                            equals: email
                        }
                    }
                ]
            }
        });

        if (existingUser) {
            if (existingUser.username === username) {
                return res.status(200).json(0);
            } else {
                return res.status(200).json(1);
            }
        }

        await prisma.user.create({
            data: {
                username: username,
                email: email,
                password: password,
                firstname: "name",
                lastname: "lastname",
            }
        });

        return res.status(201).json('สมัครสมาชิกสำเร็จ');
    } catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
}