import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import { fetcher } from "./api/fetcher";
import Loading from "@/components/Loading";
import Head from "next/head";
import ItemSmall from "@/components/ItemSmall";
import { Pagination } from "@mui/material";
export default function recentaddedpage() {
    const ItemSmallMemoized = React.memo(ItemSmall);
    const [newProduct, setNewProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [Count, setCount] = useState([]);
    const [Page, setPage] = useState(1)
    const fetchData = async () => {
        const data = await Promise.all([fetcher("http://localhost:3000/api/Iteminpages/" + Page.toString())]);
        console.log(data)
        return data;
    }
    const fetchCount = async () => {
        const res = await Promise.all([fetcher("api/getcount")]);
        return res;
    }
    const handleChange = (event, value) => {
        window.scrollTo(0, 0)
        setPage(value);
    };

    useEffect(() => {
        fetchCount().then(([res]) => {
            setCount(Math.ceil(res * 0.1))
            console.log(Math.ceil(res * 0.1))
        })
        fetchData().then(([data]) => {
            setNewProduct(data);
            setLoading(false)
        });
    }, []);
    const newProductMapped = useMemo(() => {
        return newProduct.map((property, index) => {
            return (
                <ItemSmallMemoized key={`${property.bookId}-${index}`} property={property} />
            );
        });
    }, [newProduct]);
    useEffect(() => {
        fetchData().then(([data]) => {
            setNewProduct(data);
        })
    }, [Page])
    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Head>
                <title>meb: สินค้ามาใหม่ </title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="icon"
                    type="image/png"
                    href="https://www.mebmarket.com/web/assets/images/ico/favicon-32x32.png"
                />
            </Head>
            <div className="sub-content-container">
                <div className="header-sub-content-container">
                    <h2>สินค้ามาใหม่</h2>
                </div>
                <div className="ImPagination"><Pagination size="large" count={Count} page={Page || ""} onChange={handleChange} /></div>
                <div className="content-large-container">{newProductMapped}</div>
                <div className="ImPagination"><Pagination size="large" count={Count} page={Page || ""} onChange={handleChange} /></div>
            </div>
        </>
    )
}