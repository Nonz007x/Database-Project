import { getSession } from "next-auth/react";

export const requireAuthentication = async (context, cb) => {
    const session = await getSession(context)
    if (!session || session.user.name !== "admin") {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }
    return cb({ session })
};
