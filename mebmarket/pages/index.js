import Head from 'next/head'
import ItemSmall from '@/components/ItemSmall'
import '@fontsource/roboto/400.css'
import { fetcher } from './api/fetcher'
import { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import React, { useMemo } from 'react';

export default function Home() {
  const [RecentItems, SetItems] = useState([])
  const [Data, SetData] = useState([])
  const [OpenAll, setOpenAll] = useState(0)
  const handleClick = () => {
    setOpenAll(!OpenAll)
  }


  useEffect(() => {
    Promise.all([
      fetcher('/api/getRecentAdded'),
      fetcher('/api/get'),
    ]).then(([recentItems, data]) => {
      SetItems(recentItems);
      SetData(data);
    });
  }, []);

  const mapping = useMemo(() => {
    return Data.map((property, index) => {
      return <ItemSmall key={`${property.bookId}-${index}`} property={property} />
    });
  }, [Data]);

  const RecentItemsMapped = useMemo(() => {
    return RecentItems.map((property, index) => {
      return <ItemSmall key={`${property.bookId}-${index}`} property={property} />
    });
  }, [RecentItems]);

  return (
    <>
      <Head>
        <title>meb: e-book ร้านอีบุ๊กจีนแดงอันดับ 1  </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="https://www.mebmarket.com/web/assets/images/ico/favicon-32x32.png" />
      </Head>
      <div className='CenterChild'>
        <div className="App">
          <div className='ItemsBox'>
            <div className='NewItem_Box'>
              <div className='NewestText'>
                <h2>มาใหม่</h2>
                <Button className='Index_Button' >ดูทั้งหมด</Button>
              </div>
              <div className="recentlyadded">
                {RecentItemsMapped}
              </div>
            </div>
            <div className='AddWidthToShowAll'>
              <Button variant='contained' className="EditButton" onClick={e => { handleClick() }}>Show ทั้งหมด</Button>
            </div>
            {OpenAll && 1 ? mapping : null}

          </div>



        </div>
      </div>

    </>
  )
}
