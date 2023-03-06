import Head from "next/head";
import React, { useEffect, useState, useMemo } from "react";
import { fetcher } from "./api/fetcher";
import { useSession } from "next-auth/react";
import Deletebook from "@/components/deletebook";
import { requireAuthentication } from "@/utils/requireAuthentication";

export default function Adminpage() {
    const [loading, setLoading] = useState(true);
    const [Data, SetData] = useState([]);
    const DeletebookMemoized = React.memo(Deletebook);

    const fetchData = async () => {
        const [data] = await Promise.all([fetcher("api/get")]);
        SetData(data);
        setLoading(false);
    };

    const mapping = useMemo(() => {
        fetchData();
        return Data.map((property, index) => {
            return <DeletebookMemoized key={property.bookId} property={property} />;
        });
    }, [Data]);

    if (loading) {
        return (
            <>
                <h1>Loading</h1>
                <h1>Loading</h1>
                <h1>Loading</h1>
                <h1>Loading</h1>
                <h1>Loading</h1>
                <h1>Loading</h1>
                <h1>Loading</h1>
                <h1>Loading</h1>
                <h1>Loading</h1>
                <h1>Loading</h1>
                <h1>Loading</h1>
                <h1>Loading</h1>
                <h1>Loading</h1>
                <h1>Loading</h1>
                <h1>Loading</h1>
                <h1>Loading</h1>
                <h1>Loading</h1>
                <h1>Loading</h1>
                <h1>Loading</h1>
            </>
        );
    }
    return (
        <>
            <Head>
                <title>Admin</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="icon"
                    type="image/png"
                    href="https://www.mebmarket.com/web/assets/images/ico/favicon-32x32.png"
                />
            </Head>
            <div className="list-items">{mapping}</div>
        </>
    );
}

export async function getServerSideProps(context) {
    return requireAuthentication(context, ({ session }) => {
        return {
            props: { session },
        };
    });
}
