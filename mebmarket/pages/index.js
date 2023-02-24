import Head from 'next/head'
import Navbar from '@/components/Navbar'
import ItemSmall from '@/components/ItemSmall'
import '@fontsource/roboto/400.css'
import { fetcher } from './api/fetcher'
import { useEffect, useState } from 'react'
import { Skeleton } from '@mui/material'

export default function Home() {
  //get most recent item from api/getRecentAdded
  const [RecentItems,SetItems] =useState([])
  useEffect(()=>{
    fetcher("api/getRecentAdded").then((e)=>{
      SetItems(e);
    })
  },[])
  //get most recent item from api/getRecentAdded
  const [Data,SetData] = useState([])
  useEffect(()=>{
    fetcher('/api/get').then((e)=>{
      console.log(e)
      SetData(e);
    })
  },[])

  const mapping = Data.map((property,index)=>{
    return <ItemSmall key={index} property={property}/>
  });
  const RecentItemsMapped = RecentItems.map((property,index)=>{
    return <ItemSmall key={index} property={property}/>
  })
  return (
    <>
      <Head>
        <title>meb: e-book ร้านอีบุ๊กจีนแดงอันดับ 1  </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="https://www.mebmarket.com/web/assets/images/ico/favicon-32x32.png"/>
      </Head>
      <Navbar />
      <div className='CenterChild'>
        <div className="App">
          
            <div className='ItemsBox'>
            <div className='NewestText'>
              <h2>มาใหม่</h2>
              <div className="recentlyadded">
                {RecentItemsMapped}
              </div>
            </div>
            {mapping}
          </div>
          


        </div>
      </div>
      
    </>
  )
}