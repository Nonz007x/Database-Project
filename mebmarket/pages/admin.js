import Navbar from "@/components/Navbar"
import Head from "next/head"
import { useEffect, useState, useMemo } from "react";
import { fetcher } from "./api/fetcher";
import Deletebook from "@/components/deletebook";
export default function Adminpage() {
    const [Data, SetData] = useState([])
    useEffect(() => {
        Promise.all([
            fetcher('api/get'),
        ]).then(([data]) => {
            SetData(data);
            console.log(data)
        });
    }, []);

    const mapping = useMemo(() => {
        return Data.map((property, index) => {
            return <Deletebook key={`${property.bookId}-${index}`} property={property} />
        });
    }, [Data]);

    return (
        <>
            <Head>
                <title>Admin</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/png" href="https://www.mebmarket.com/web/assets/images/ico/favicon-32x32.png" />
            </Head>
            <Navbar />
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