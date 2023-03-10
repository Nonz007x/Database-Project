import Head from 'next/head';
import Link from "next/link";
import { Alert } from "@mui/material";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { fetcher } from "../api/fetcher";
import { Snackbar } from "@mui/material";
import { TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import LoginPage from "@/components/Login.form";
import RecentComment from "@/components/RecentComment";
import CustomizedRating from "@/components/CustomRating";
import { useEffect, useCallback, useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RatingAbleCustomizedRating from "@/components/RatingAbleCustomizedRating";
import ClickableFavoriteIcon from '@/components/ClickableFavoriteIcon';

export default function Page() {
    const { data: clientSession } = useSession()
    const [open, setOpen] = useState(false)
    const router = useRouter();
    const [Data, SetData] = useState(null);
    const [ratingGiven, setRatingGiven] = useState(0)
    const [commentWriten, setcommentWritten] = useState("")
    const bookname = router.query.bookname;
    const [CommentsData, setCommentsData] = useState("")

    const fetchComment = async (bookId) => {
        const result = await fetcher(`/api/getComments/${bookId}`);
        setCommentsData(result)
    }
    // start เพิ่มในของรักของข้า
    const addtoFavorite = (FavoriteValue) => {
        if (FavoriteValue) {
            // delete
            const FavoDel = async () => {
                try {
                    const response = await fetch("/api/favorite/delete", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: new URLSearchParams({
                            username: clientSession.user.name,
                            bookId: Data.bookId,
                        }),
                    });
                    if (!response.ok) {
                        throw new Error('Error posting comment');
                    }
                } catch (error) {
                    console.error(error);
                }
            }
            FavoDel();
            //end if 
        }
        else {
            //add
            const FavoAdd = async () => {
                try {
                    const response = await fetch("/api/favorite/add", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: new URLSearchParams({
                            username: clientSession.user.name,
                            bookId: Data.bookId,
                        }),
                    });
                    if (!response.ok) {
                        throw new Error('Error posting comment');
                    }
                } catch (error) {
                    console.error(error);
                }
            }
            FavoAdd();
        }
    }
    // end 
    const UploadComment = async () => {
        try {
            const response = await fetch("/api/PostcommentAndRating", {
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
            });

            if (!response.ok) {
                throw new Error('Error posting comment');
            }

            setOpen(true);
            setcommentWritten("");
            setRatingGiven(0);
            await fetchComment(Data.bookId);
        } catch (error) {
            console.error(error);
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const fetchData = useCallback(async () => {
        const e = await fetcher(`/api/getBookByName/${bookname}`);
        SetData(e);
        fetchComment(e.bookId)
    }, [bookname]);

    useEffect(() => {
        if (bookname) {
            fetchData();
        }
    }, [bookname, fetchData]);

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
                                    }}> {Data.author}</Link></p>
                                    <p>สำนักพิมพ์ <a href="">//ยังไม่มีสำนักพิมพ์</a></p>
                                    <p>หมวดหมู่ <a href=""> {Data.categoryName}</a></p>
                                </div>
                                <div id="TryAndBuyDiv">
                                    <Button variant="contained" size="large" id="Try_Button">ทดลองอ่าน</Button>
                                    <Button variant="contained" size="large" className="Buy_Button">ซื้อ {Data.price} บาท</Button>
                                </div>
                                <div id="RatingZone" >
                                    <h5>{Data.rating.toFixed(2)}</h5>
                                    <CustomizedRating size="large" rate={Data.rating} />
                                </div>
                                {/* here */}
                                {!!clientSession ? <div id="favorite-zone">
                                    <ClickableFavoriteIcon onClick={(e) => {
                                        addtoFavorite(e.target.value)
                                    }} value={0} />
                                </div> : null}

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
                            <div className="blur-if-not-login">
                                {!clientSession ? <div className="blur-effect"><h3>โปรดเข้าสู่ระบบเพื่อคอมเมนต์และเรตติ้ง</h3><LoginPage style="comment" /></div> : null}
                                <div className="rating-and-comment">
                                    <div className="give-rate-zone">
                                        <RatingAbleCustomizedRating rate={ratingGiven || ""} onChange={(e) => {
                                            setRatingGiven(e)
                                        }} />
                                    </div>
                                    <div>
                                        <TextField type="text" value={commentWriten} onChange={(e) => { setcommentWritten(e.target.value) }} fullWidth className="comment-zone"
                                            multiline minRows={4} maxRows={4} placeholder="เขียนคอมเมนต์" />
                                    </div>
                                </div>
                                <div className="comment-button">

                                    <Button
                                        disabled={ratingGiven == 0 ? true : false}
                                        onClick={() => {
                                            UploadComment();
                                            fetchComment();
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