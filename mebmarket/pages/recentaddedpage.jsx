import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import { fetcher } from "./api/fetcher";
import Loading from "@/components/Loading";
import Head from "next/head";
import ItemSmall from "@/components/ItemSmall";

export default function newproductpage() {
    const ItemSmallMemoized = React.memo(ItemSmall);
    const [newProduct, setNewProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const data = await Promise.all([fetcher("/api/getRecentAddedpage")]);
        return data;
    }

    useEffect(() => {
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

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Head>
                <title>meb: e-book ร้านอีบุ๊กจีนแดงอันดับ 1 </title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="icon"
                    type="image/png"
                    href="https://www.mebmarket.com/web/assets/images/ico/favicon-32x32.png"
                />
            </Head>
            <div className="sub-content-container">
                <div className="header-recent-container">
                    <h2>สินค้ามาใหม่</h2>
                </div>
                <div className="content-recent-container">{newProductMapped}</div>
            </div>
        </>
    )
}