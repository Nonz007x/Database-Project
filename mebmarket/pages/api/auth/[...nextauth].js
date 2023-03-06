import NextAuth from "next-auth"
import { compare } from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import GithubProvider from "next-auth/providers/github"
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
                const { name, password } = credentials
                if ( name === "admin" && password === "123") {
                    return {
                        id: 0,
                        name: "admin",
                        email: "nitid123@ex.com",
                        redirect: {
                            destination: "/",
                            permanent: false,
                        }
                    };
                }

                const user = await prisma.user.findMany({
                    where: {
                        AND: {
                            username: name,
                            password: password
                        },
                    }
                });
                const { username, email, role } = user[0];

                if (!user[0]) {
                    return null;
                }
                // const isValid = await compare(password, user.password);
                // if (!isValid) {
                //     return null;
                // }

                return {
                    name: username,
                    email: email,
                    role: role,
                    redirect: {
                        destination: "/",
                        permanent: false,
                    }
                };

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

    // pages: {
    // }
}
export default NextAuth(authOptions)  