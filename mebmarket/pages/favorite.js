import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";
import ItemSmall from "@/components/ItemSmall";
import Loading from "@/components/Loading";
export default function FavoritePage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        funcStart();
        setLoading(false);
    }, []);

    const [FavoriteBook, setFavoriteBook] = useState([]);

    const funcStart = async () => {
        const clientSession = await getSession();
        // console.log(clientSession.user.name);
        const res = await fetch("/api/favorite/get", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                username: clientSession.user.name,
            }),
        });
        const posts = await res.json();
        setFavoriteBook(posts);
        console.log(posts);
    };

    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <>
                <h1 className="book_bookname_Bookname">รายการสิ่งที่อยากได้</h1>
                <div className="CollapseWidth">
                    {Object.values(FavoriteBook).map((property, index) => {
                        return <ItemSmall key={index} property={property} />;
                    })}
                </div>
            </>
        </>
    );
}
