import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import excuteQuery from "@/shared/database";
import CredentialsProvider from "next-auth/providers/credentials";


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

                const user = await excuteQuery({
                    query: "SELECT username,email,role,avatar FROM user WHERE username = ? AND password = ?;",
                    values: [name, password]
                });

                if (user) {
                    const { username, email, role, avatar } = user[0];
                    return {
                        name: username,
                        email: email,
                        role: role,
                        avatar: avatar,
                        redirect: {
                            destination: "/",
                            permanent: false,
                        }
                    };
                }

                return null;
            },
        })
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.id = user.id;
                token.role = user.role;
                token.avatar = user.avatar;
            }
            return token;
        },
        session: async ({ session, token }) => {
            if (token) {
                session.id = token.id;
                session.role = token.role;
                session.avatar = token.avatar;
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