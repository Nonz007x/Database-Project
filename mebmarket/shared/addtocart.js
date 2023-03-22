import { getSession } from "next-auth/react";

export default async function addToCart (bookId, price) {
    const session = await getSession();
    try {
        const response = await fetch("/api/cart/addtocart", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                username: session.user.name,
                bookId: bookId,
            }),
        });
        const data = await response.json();
        if (response.ok) {
            alert("เพิ่มหนังสือในตะกร้าสำเร็จ");
        } else {
            alert(JSON.stringify(data));
        }
    } catch (error) {
        console.error(error)
    }
};