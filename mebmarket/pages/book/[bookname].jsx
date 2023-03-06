import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetcher } from "../api/fetcher";
import Head from 'next/head'
import { Button } from "@mui/material";
import RatingAbleCustomizedRating from "@/components/RatingAbleCustomizedRating";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { TextField } from "@mui/material";
import RecentComment from "@/components/RecentComment";
import CustomizedRating from "@/components/CustomRating";

export default function Page() {
    const router = useRouter();
    const [Data, SetData] = useState(null);
    const bookname = router.query.bookname;

    useEffect(() => {
        const fetchData = async () => {
            const e = await fetcher('../api/getBookByName/' + bookname);
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
                <link rel="icon" type="image/png" href="https://www.mebmarket.com/web/assets/images/ico/favicon-32x32.png" />
            </Head>
            {(Data != null) ?
                <div className="book_bookname_Container">   
                    <div className="book_bookname_PageAdjust">
                        <h1 className="book_bookname_Bookname">{Data.bookname}</h1>
                        <div className="book_book_ItemAndDetail">
                            <img src={Data.cover} className="book_Img" />
                            <div id="Detail">
                                <div id="data_author_publisher_category">
                                    <p>โดย <a href={"/search/author/" + Data.author}>{Data.author}</a></p>
                                    <p>สำนักพิมพ์ <a href="">//ยังไม่มีสำนักพิมพ์</a></p>
                                    <p>หมวดหมู่ <a href="">//ยังไม่มี Catagory</a></p>
                                </div>
                                <div id="TryAndBuyDiv">
                                    <Button variant="contained" size="large" id="Try_Button">ทดลองอ่าน</Button>
                                    <Button variant="contained" size="large" className="Buy_Button">ซื้อ {Data.price} บาท</Button>
                                </div>
                                <div id="RatingZone" >
                                    <h5>{Data.rating}</h5>
                                    <CustomizedRating size="large" rate={Data.rating} />
                                </div>
                                <div id="release_date">
                                    <p>วันที่วางขาย</p>
                                    <p>{Data.date.substring(0, 10)}</p>
                                </div>
                            </div>
                        </div>
                        <div className="synopsis">
                            <p>
                                {Data.synopsis}
                            </p>
                        </div>
                        <div className="comment-section">
                            <div>
                                <h3>คอมเมนต์และให้เรตติ้ง</h3>
                            </div>
                            <div className="comment-profile-user">
                                <AccountCircleIcon fontSize="large" />
                                <div className="comment-show-username">
                                    <p>username</p>
                                </div>
                            </div>
                            <div className="rating-and-comment">
                                <div className="give-rate-zone">
                                    <RatingAbleCustomizedRating rate={0} />
                                </div>
                                <div>
                                    <TextField type="text" fullWidth className="comment-zone" 
                                    multiline minRows={4} maxRows={4} placeholder="เขียนคอมเมนต์" />
                                </div>
                            </div>
                            <div className="comment-button">
                                <Button variant="contained" className="comment-submit">คอมเมนต์</Button>
                            </div>
                            <div className="all-comment">
                                <div className="all-comment-header">
                                    <h3>คอมเมนต์ทั้งหมด</h3>
                                </div>
                                <div className="recent-comment">
                                    <RecentComment />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : null}

            {/* {Data} */}
        </>
    )
}