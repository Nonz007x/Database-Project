import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetcher } from "../api/fetcher";
import Head from 'next/head'
import { Button } from "@mui/material";
import RatingAbleCustomizedRating from "@/components/RatingAbleCustomizedRating";

export default function Page(){
    const [Data,SetData] = useState(null);
    const router = useRouter();
    const bookname = router.query.bookname;

    useEffect(() => {
        const fetchData = async () => {
            const e = await fetcher('../api/getBookByName/'+bookname);
            SetData(e);
        };
        if (bookname) {
            fetchData();
        }
    }, [bookname]);
    


    return (
        <>
            <Head>
                <title>{bookname}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/png" href="https://www.mebmarket.com/web/assets/images/ico/favicon-32x32.png"/>
            </Head>
            <Navbar/>
            {(Data != null)?
                <div className="book_bookname_Container">
                    <div className="book_bookname_PageAdjust">
                        <h1 className="book_bookname_Bookname">{Data.bookname}</h1>
                        <div className="book_book_ItemAndDetail">
                            <img src={Data.cover} className="book_Img"/>
                            <div id="Detail">
                                <div id="data_author_publisher_category">
                                    <p>โดย <a href={"http://localhost:3000/search/author/"+Data.author}>{Data.author}</a></p>
                                    <p>สำนักพิมพ์ <a href="">//ยังไม่มีสำนักพิมพ์</a></p>
                                    <p>หมวดหมู่ <a href="">//ยังไม่มี Catagory</a></p>
                                </div>
                                <div id="TryAndBuyDiv">
                                    <Button variant="contained" size="large" id="Try_Button">ทดลองอ่าน</Button>
                                    <Button variant="contained" size="large" className="Buy_Button">ซื้อ {Data.price} บาท</Button>
                                </div>
                                <div id="RatingZone" >
                                    <h5>{Data.rating}</h5>
                                    <RatingAbleCustomizedRating  rate={Data.rating}/>
                                </div>
                                <div id="release_date">
                                    <p>วันที่วางขาย</p>
                                    <p>{Data.date.substring(0, 10)}</p>
                                </div>
                            </div>
                        </div>
                        <div className="synopsis">
                            <p>
                                เนื้อเรื่องย่อ
                            </p>
                            <p>
                                {Data.synopsis}
                            </p>
                        </div>
                    </div>
                </div>
            :null}
            

            {/* {Data} */}
        </>
    )
}