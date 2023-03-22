import Head from 'next/head';
import Link from "next/link";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { Snackbar } from "@mui/material";
import { TextField } from "@mui/material";
import addToCart from '@/shared/addtocart';
import { Alert, Avatar } from "@mui/material";
import LoginPage from "@/components/Login.form";
import RecentComment from "@/components/RecentComment";
import CustomizedRating from "@/components/CustomRating";
import { useEffect, useCallback, useState } from "react";
import { useSession} from "next-auth/react";
import checkPaidBook from '@/shared/checkpaidbook';
import RatingAbleCustomizedRating from "@/components/RatingAbleCustomizedRating";
import ClickableFavoriteIcon from '@/components/ClickableFavoriteIcon';

export default function Page() {
    const { data: clientSession } = useSession()
    const [open, setOpen] = useState(false)
    const router = useRouter();
    const [bookData, setBookData] = useState(null);
    const [ratingGiven, setRatingGiven] = useState(0)
    const [commentWriten, setcommentWritten] = useState("")
    const bookname = router.query.bookname;
    const [CommentsData, setCommentsData] = useState("")
    const [isFavorited, setIsFavorited] = useState(true)
    const [Paid, setPaid] = useState(true)

    const handleFavoStatusChange = () => {
        setIsFavorited(!isFavorited)
        if (isFavorited) {
            FavoDel()

        }
        else {
            FavoAdd()
        }
    }
    const FavoAdd = async () => {
        const response = await fetch("/api/favorite/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                username: clientSession.user.name,
                bookId: bookData.bookId,
            }),
        });
        if (!response.ok) {
            throw new Error('Error posting comment');
        }
    }
    const FavoDel = async () => {
        // console.log(bookData.bookId)
        const response = await fetch("/api/favorite/delete", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                username: clientSession.user.name,
                bookId: bookData.bookId,
            }),
        });
        if (!response.ok) {
            throw new Error('Error posting comment');
        }
    }

    const UploadComment = async () => {
        try {
            const response = await fetch("/api/PostcommentAndRating", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    bookId: bookData.bookId,
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
            await fetchCommentData();
        } catch (error) {
            console.error(error);
        }
    };

    const fetchIsAlreadyFavorited = async () => {
        // console.log(clientSession?.user?.name, bookData?.bookId);
        try {
            const res = await fetch("/api/favorite/check", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    username: clientSession?.user?.name,
                    bookId: bookData?.bookId,
                }),
            });
            if (!res.ok) {
                throw new Error('Error adding to wishlist');
            }
            const data = await res.json();
            // console.log("data[0].rowExists =", data[0].rowExists)
            // console.log(data[0]?.rowExists)
            setIsFavorited(data[0]?.rowExists)

        } catch (error) {
            console.error(error)
        }

    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const fetchBookData = useCallback(async () => {
        try {
            const response = await fetch(`/api/getBookByName/${bookname}`);
            const data = await response.json();
            setBookData(data);
        } catch (error) {
            console.error(error);
        }
    }, [bookname]);


    const fetchCommentData = useCallback(async () => {
        try {
            const response = await fetch(`/api/getComments/${bookData.bookId}`);
            const data = await response.json();
            setCommentsData(data);
        } catch (error) {
            console.error(error);
        }
    }, [bookData]);

    const handleBuy = async () => {
        await addToCart(bookData.bookId, bookData.price)
    }

    const getPaidBooks = async () => {
        const response = await checkPaidBook(bookData.bookId);
        setPaid(response)
    }
    // endhere

    useEffect(() => {
        if (bookname) {
            fetchBookData();
        }
    }, [bookname]);

    useEffect(() => {
        if (clientSession && bookData?.bookId) {
            getPaidBooks();
        }
    }, [bookData?.bookId])

    useEffect(() => {
        if (bookData) {
            fetchIsAlreadyFavorited();
            fetchCommentData();
        }
    }, [bookData]);

    return (
        <>
            <Head>
                <title>{bookname}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/png" href="https://www.mebmarket.com/web/assets/images/ico/favicon-32x32.png" />
            </Head>
            {(bookData != null) ?
                <div className="bookpage_container">
                    <div className="bookpage_bookname_container">
                        <h1>{bookData.bookname}</h1>
                    </div>
                    <div className="bookpage_cover_detail">
                        <div className="bookpage_book_cover">
                            <img src={bookData.cover}/>
                        </div>
                        <div className="bookpage_book_detail">
                            <div className="author_publisher_category">
                                <p>โดย<Link href={{
                                    pathname: "/search/author/[author]",
                                    query: { author: bookData.author }
                                }}> {bookData.author}</Link></p>
                                <p>หมวดหมู่ <a href="#">{bookData.categoryName}</a></p>
                            </div>
                            <div className="try_buy_container">
                                <Button variant="contained" size="large" className="try_button">ทดลองอ่าน</Button>
                                {Paid ? <Button disabled variant="contained" size="large" className="buy_button" >ซื้อ {bookData.price} บาท</Button>
                                    : <Button variant="contained" size="large" className="buy_button" onClick={handleBuy}>ซื้อ {bookData.price} บาท</Button>
                                }
                            </div>
                            <div className="bookpage_rating_zone" >
                                <h5>{bookData.rating.toFixed(2)}</h5>
                                <CustomizedRating size="large" rate={bookData.rating} />
                            </div>
                            {!!clientSession ?
                                <div className="bookpage_favorite_zone">
                                    <ClickableFavoriteIcon value={isFavorited} onChange={() => {
                                        handleFavoStatusChange()
                                    }} />
                                </div> : null}

                            <div className="bookpage_release_date">
                                <p>วันที่วางขาย</p>
                                <p>{bookData.date.substring(0, 10)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="synopsis">
                        <p>
                            {bookData.synopsis}
                        </p>
                    </div>
                    <div className="comment-section">
                        <div>
                            <h3>คอมเมนต์และให้เรตติ้ง</h3>
                        </div>
                        <div className="comment-profile-user">
                            <div className="comment-show-username">
                            {!!clientSession ? <div className='comment-profile-user'><Avatar src={clientSession.avatar || ""} />{clientSession.user.name}</div> : null}
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
                                    <TextField type="text" value={commentWriten} onChange={(e) => { setcommentWritten(e.target.value) }} fullWidth
                                        multiline rows={4} placeholder="เขียนคอมเมนต์" />
                                </div>
                            </div>
                            <div className="comment-button">
                                <Button
                                    disabled={ratingGiven == 0 ? true : false}
                                    onClick={() => {
                                        fetchBookData();
                                        UploadComment();
                                    }} variant="contained" className="comment-submit">คอมเมนต์
                                </Button>
                            </div>
                        </div>
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
                : null
            }
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert variant="filled" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    เพิ่มคอมเมนต์สำเร็จ
                </Alert>
            </Snackbar>
            {/* {Data} */}
        </>
    )
}