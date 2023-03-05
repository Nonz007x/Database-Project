import Head from "next/head"
import React, { useEffect, useState, useMemo } from "react";
import { fetcher } from "./api/fetcher";
import { getSession, useSession } from "next-auth/react";
import Deletebook from "@/components/deletebook";

export default function Adminpage({ authenticate, session }) {
    const { data: clientSession, status } = useSession();
    const [loading, setLoading] = useState(true)
    const [Data, SetData] = useState([])
    const DeletebookMemoized = React.memo(Deletebook);
    useEffect(() => {
        const fetchData = async () => {
            const [data] = await Promise.all([fetcher("api/get")]);
            SetData(data);
            setLoading(false)
        };
        if (session) {
            fetchData();
        }
    }, []);

    const mapping = useMemo(() => {
        return Data.map((property, index) => {
            return <DeletebookMemoized key={property.bookId} property={property} />
        });
    }, [Data]);

    if (!session) {
        return (
            <>
                <h1>Access denied</h1>
                <h1>Access denied</h1>
                <h1>Access denied</h1>
                <h1>Access denied</h1>
                <h1>Access denied</h1>
                <h1>Access denied</h1>
                <h1>Access denied</h1>
                <h1>Access denied</h1>
                <h1>Access denied</h1>
                <h1>Access denied</h1>
                <h1>Access denied</h1>
                <h1>Access denied</h1>
                <h1>Access denied</h1>
                <h1>Access denied</h1>
                <h1>Access denied</h1>
                <h1>Access denied</h1>
                <h1>Access denied</h1>
            </>
        )
    }

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
        )
    }
    return (
        <>
            <Head>
                <title>Admin</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/png" href="https://www.mebmarket.com/web/assets/images/ico/favicon-32x32.png" />
            </Head>
            <div className='CenterChild'>
                <div className="App">
                    <div className='ItemsBox'>
                        {mapping}
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)
    return {
        props: {
            session,
        },
    }
}