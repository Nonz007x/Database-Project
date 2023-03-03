import NextAuth from "next-auth"
import { compare } from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";


const prisma = new PrismaClient();
export const authOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials, req) {
                const { username, password } = credentials;

                const user = await prisma.user.findUnique({ where: { username } });
                if (!user) {
                    return null;
                }

                const isValid = await compare(password, user.password);
                if (!isValid) {
                    return null;
                }
                return { };
            },
        })
    ],
    pages: {
    }
}
export default NextAuth(authOptions)  