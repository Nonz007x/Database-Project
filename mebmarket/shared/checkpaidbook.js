import { getSession } from "next-auth/react";

export default async function checkPaidBook(bookId) {
    const session = await getSession();
    if ( session == null){
        return false;
    }
    const respones = await fetch("http://localhost:3000/api/Checkpaidbook", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            username: session.user.name,
            bookId: bookId,
        }),
    })
    const data = await respones.json();
    if (data.length == 0) {
        return false;
    } else {
        return true;
    }
}