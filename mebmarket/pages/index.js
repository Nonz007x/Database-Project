import Head from "next/head";
import ItemSmall from "@/components/ItemSmall";
import { fetcher } from "./api/fetcher";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import React, { useMemo } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Loading from "@/components/Loading";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  const ItemSmallMemoized = React.memo(ItemSmall);
  const [RecentItems, SetItems] = useState([]);
  const [Data, SetData] = useState([]);
  const [TrendingItems, SetTrending] = useState([]);
  const [OpenAll, setOpenAll] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setOpenAll((prevState) => !prevState);
    router.replace({ query: { openAll: !OpenAll } });
  };

  useEffect(() => {
    if (router.query.openAll === "true") {
      setOpenAll(true);
    }
  }, [router.query]);

  useEffect(() => {
    Promise.all([fetcher("/api/getRecentAdded"), fetcher("/api/get"), fetcher("/api/getBookByRating")]).then(
      ([recentItems, data, trendingItems]) => {
        SetItems(recentItems);
        SetData(data);
        SetTrending(trendingItems)
      }
    );
  }, []);

  const mapping = useMemo(() => {
    return Data.map((property, index) => {
      return (
        <ItemSmallMemoized
          key={`${property.bookId}-${index}`}
          property={property}
        />
      );
    });
  }, [Data]);

  const RecentItemsMapped = useMemo(() => {
    return RecentItems.map((property, index) => {
      return (
        <ItemSmallMemoized
          key={`${property.bookId}-${index}`}
          property={property}
        />
      );
    });
  }, [RecentItems]);

  const TrendingItemsMapped = useMemo(() => {
    return TrendingItems.map((property, index) => {
      return (
        <ItemSmallMemoized
          key={`${property.bookId}-${index}`}
          property={property}
        />
      );
    });
  }, [TrendingItems]);

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
        <div className="header-sub-content-container">
          <h2>สินค้ามาใหม่</h2>
          <Link href="/recentaddedpage">
            <Button className="view-recent-button">ดูทั้งหมด</Button>
          </Link>
        </div>
        <div className="content-small-container">{RecentItemsMapped}</div>
      </div>
      <div className="sub-content-container">
        <div className="header-sub-content-container">
          <h2>สินค้ามาแรง</h2>
          <Link href="/trendingpage">
            <Button className="view-recent-button">ดูทั้งหมด</Button>
          </Link>
        </div>
        <div className="content-small-container">{TrendingItemsMapped}</div>
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