import NextAuth from "next-auth"
import { compare } from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import GithubProvider from "next-auth/providers/github"
import excuteQuery from "@/shared/database";
import CredentialsProvider from "next-auth/providers/credentials";


const prisma = new PrismaClient();
export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            type: "credentials",
            credentials: {
                name: {
                    label: "Username",
                    type: "text",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { name, password } = credentials;

                // const user = await prisma.user.findOne({
                //     where: {
                //         AND: {
                //             username: name,
                //             password: password
                //         },
                //     }, take: 1,
                // });
                const user = await excuteQuery({
                    query: "SELECT username,email,role FROM user where username = ?;",
                    values: [name, password]
                });

                if (user) {
                    const { username, email, role } = user[0];
                    return {
                        name: username,
                        email: email,
                        role: role,
                        redirect: {
                            destination: "/",
                            permanent: false,
                        }
                    };
                }

                return null;

                // const isValid = await compare(password, user.password);
                // if (!isValid) {
                //     return null;
                // }


            },
        })
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.id = user.id;
                token.role = user.role;
            }
            return token;
        },
        session: async ({ session, token }) => {
            if (token) {
                session.id = token.id;
                session.role = token.role;
            }
            return session;
        }
    },
    secret: "test",
    jwt: {
        secret: "test",
        encryption: true,
    }
}
export default NextAuth(authOptions)  