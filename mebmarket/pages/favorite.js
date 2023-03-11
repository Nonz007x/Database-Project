import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import ItemSmall from "@/components/ItemSmall";
import Loading from "@/components/Loading";
import LoginPage from "@/components/Login.form";
import { useRouter } from "next/router";
export default function FavoritePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const { data: clientSession } = useSession();
    useEffect(() => {
        funcStart();
        setLoading(false);
    }, []);

    const [FavoriteBook, setFavoriteBook] = useState([]);

    const funcStart = async () => {
        const res = await fetch("/api/favorite/get", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                username: clientSession?.user?.name,
            }),
        });
        const posts = await res.json();
        setFavoriteBook(posts);
        // console.log(posts);
    };

    if (!clientSession) {
        return (
            <>
                <LoginPage popup={true}/>
            </>
        );
    }

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
