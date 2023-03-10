import Head from "next/head";
import ItemSmall from "@/components/ItemSmall";
import { useState, useCallback } from "react";
import { Button } from "@mui/material";
import React, { useMemo } from "react";
import { useSession } from "next-auth/react";
import Loading from "@/components/Loading";
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";

export async function getServerSideProps() {
    const [recentItems, data, trendingItems] = await Promise.all([
        fetch("http://localhost:3000/api/getRecentAdded").then(res => res.json()),
        fetch("http://localhost:3000/api/get").then(res => res.json()),
        fetch("http://localhost:3000/api/getBookByRating").then(res => res.json())
    ]);

    return {
        props: {
            recentItems,
            data,
            trendingItems,
        },
    };
};

export default function Home({ recentItems, data, trendingItems }) {
    const { data: status } = useSession();
    const loading = status === "loading";
    const ItemSmallMemoized = React.memo(ItemSmall);
    const [OpenAll, setOpenAll] = useState(false);

    const handleClick = useCallback(() => {
        setOpenAll((prevState) => !prevState);
    }, []);

    const mapping = useMemo(
        () =>
            Array.from(data).map((property, index) => (
                <React.Fragment key={`${property.bookId}-${index}`}>
                    <ItemSmallMemoized property={property} />
                </React.Fragment>
            )),
        [data, ItemSmallMemoized]
    );

    const RecentItemsMapped = useMemo(
        () =>
            Array.from(recentItems).map((property, index) => (
                <React.Fragment key={`${property.bookId}-${index}`}>
                    <ItemSmallMemoized property={property} />
                </React.Fragment>
            )),
        [recentItems, ItemSmallMemoized]
    );

    const TrendingItemsMapped = useMemo(
        () =>
            Array.from(trendingItems).map((property, index) => (
                <React.Fragment key={`${property.bookId}-${index}`}>
                    <ItemSmallMemoized property={property} />
                </React.Fragment>
            )),
        [trendingItems, ItemSmallMemoized]
    );

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Head>
                <title>meb: e-book ร้านอีบุ๊กจีนแดงอันดับ 1 </title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="https://www.mebmarket.com/web/assets/images/ico/favicon-32x32.png"
                />
            </Head>
            <div className="sub-content-container">
                <div className="header-sub-content-container">
                    <h2>สินค้ามาใหม่</h2>
                    <Link href="/recentaddedpage">
                        <Button className="view-recent-button">
                            ดูทั้งหมด
                        </Button>
                    </Link>
                </div>
                <div className="content-small-container">
                    {RecentItemsMapped}
                </div>
            </div>
            <div className="sub-content-container">
                <div className="header-sub-content-container">
                    <h2>สินค้ามาแรง</h2>
                    <Link href="/trendingpage">
                        <Button className="view-recent-button">
                            ดูทั้งหมด
                        </Button>
                    </Link>
                </div>
                <div className="content-small-container">
                    {TrendingItemsMapped}
                </div>
            </div>
            <div className="AddWidthToShowAll">
                <Button
                    variant="contained"
                    className="EditButton"
                    onClick={() => {
                        handleClick();
                    }}
                >
                    {!OpenAll ? "Show " : "Hide "}ทั้งหมด
                </Button>
            </div>
            <div className="CollapseWidth">{OpenAll ? mapping : null}</div>
        </>
    );
}