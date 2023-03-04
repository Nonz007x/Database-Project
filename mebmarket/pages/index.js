import Head from "next/head";
import ItemSmall from "@/components/ItemSmall";
import "@fontsource/roboto/400.css";
import { fetcher } from "./api/fetcher";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import React, { useMemo } from "react";
import { useRouter } from "next/router";
import { Collapse } from "@mui/material";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  const ItemSmallMemoized = React.memo(ItemSmall);
  const [RecentItems, SetItems] = useState([]);
  const [Data, SetData] = useState([]);
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
    Promise.all([fetcher("/api/getRecentAdded"), fetcher("/api/get")]).then(
      ([recentItems, data]) => {
        SetItems(recentItems);
        SetData(data);
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

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
        <h1>Loading...</h1>
        <h1>Loading...</h1>
        <h1>Loading...</h1>
        <h1>Loading...</h1>
        <h1>Loading...</h1>
        <h1>Loading...</h1>
        <h1>Loading...</h1>
        <h1>Loading...</h1>
        <h1>Loading...</h1>
        <h1>Loading...</h1>
        <h1>Loading...</h1>
        <h1>Loading...</h1>
        <h1>Loading...</h1>
        <h1>Loading...</h1>
        <h1>Loading...</h1>
        <h1>Loading...</h1>
        <h1>Loading...</h1>
        <h1>Loading...</h1>
        <h1>Loading...</h1>
        <h1>Loading...</h1>
        <h1>Loading...</h1>
        <h1>Loading...</h1>
        <h1>Loading...</h1>
      </div>
    )
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
      <div className="CenterChild">
        <div className="App">
          <div className="ItemsBox">
            <div className="NewItem_Box">
              <div className="NewestText">
                <h2>มาใหม่</h2>
                <Button className="Index_Button">ดูทั้งหมด</Button>
              </div>
              <div className="recentlyadded">{RecentItemsMapped}</div>
            </div>
            <div className="AddWidthToShowAll">
              <Button
                variant="contained"
                className="EditButton"
                onClick={() => {
                  handleClick();
                }}
              >
                {!OpenAll? "Show ":"Hide "}ทั้งหมด
              </Button>
            </div>
            <div className="CollapseWidth">{OpenAll?mapping:null}</div>
          </div>
        </div>
      </div>
    </>
  );
}
