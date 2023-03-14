import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import ItemSmall from "@/components/ItemSmall";
import Loading from "@/components/Loading";
import { useRouter } from "next/router";

export default function FavoritePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const { data: clientSession, status } = useSession();

    useEffect(() => {
        if (status === 'authenticated') {
            funcStart();
            setLoading(false);
        } else if (status === 'loading') {
            // do nothing
        } else {
            router.push('/');
        }
    }, [status, router]);

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
