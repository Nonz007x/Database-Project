import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { fetcher } from "../api/fetcher";
import Head from 'next/head'
import { Button } from "@mui/material";
import RatingAbleCustomizedRating from "@/components/RatingAbleCustomizedRating";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { TextField } from "@mui/material";
import RecentComment from "@/components/RecentComment";
import CustomizedRating from "@/components/CustomRating";
import { useSession } from "next-auth/react";
import Link from "next/link";
import LoginPage from "@/components/Login.form";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";

export default function Page() {
    const { data: clientSession, status } = useSession()
    const [open, setOpen] = useState(false)
    const router = useRouter();
    const [Data, SetData] = useState(null);
    const [ratingGiven, setRatingGiven] = useState(0)
    const [commentWriten, setcommentWriten] = useState("")
    const bookname = router.query.bookname;
    const [CommentsData, setCommentsData] = useState("")

    const fetchComment = async (bookId) => {
        const result = await fetcher("/api/getComments/" + bookId.toString());
        setCommentsData(result)
    }

    const UploadComment = () => {
        fetch("/api/PostcommentAndRating", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                bookId: Data.bookId,
                username: clientSession.user.name,
                comment: commentWriten,
                rating: ratingGiven,
            }),
        })
        // fetchComment(Data.bookId);
        setOpen(true);
    }
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    useEffect(() => {
        const fetchData = async () => {
            const e = await fetcher('../api/getBookByName/' + bookname);
            SetData(e);
            fetchComment(e.bookId)
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
                                    <p>โดย<Link href={{
                                        pathname: "/search/author/[author]",
                                        query: { author: Data.author }
                                    }}>{Data.author}</Link></p>
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
                                    <p>{!!clientSession ? clientSession.user.name : <LoginPage style="comment" />}</p>
                                </div>
                            </div>

                            {/*here*/}
                            <div className="blur-if-not-login">
                                {!clientSession ? <div className="blur-effect"><h3>โปรดเข้าสู่ระบบเพื่อคอมเมนต์และเรตติ้ง</h3><LoginPage style="comment" /></div> : null}
                                <div className="rating-and-comment">
                                    <div className="give-rate-zone">
                                        <RatingAbleCustomizedRating rate={ratingGiven || ""} onChange={(e) => {
                                            setRatingGiven(e)
                                        }} />
                                    </div>
                                    <div>
                                        <TextField type="text" value={commentWriten} onChange={(e) => { setcommentWriten(e.target.value) }} fullWidth className="comment-zone"
                                            multiline minRows={4} maxRows={4} placeholder="เขียนคอมเมนต์" />
                                    </div>
                                </div>
                                <div className="comment-button">

                                    <Button
                                        disabled={ratingGiven == 0 ? true : false}
                                        onClick={() => {
                                            UploadComment();
                                        }} variant="contained" className="comment-submit">คอมเมนต์
                                    </Button>
                                </div>
                            </div>
                            {/* end here */}
                            <div className="all-comment">
                                <div className="all-comment-header">
                                    <h3>คอมเมนต์ทั้งหมด</h3>
                                </div>
                                <div className="recent-comment">
                                    {CommentsData.length > 0 ? CommentsData.map((property, index) => {
                                        return (
                                            <RecentComment
                                                property={property}
                                                key={`${property.bookId}-${index}`}
                                            />
                                        )
                                    }) : null}
                                    {/* {mappedComments} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : null
            }
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert variant="filled" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
            {/* {Data} */}
        </>
    )
}