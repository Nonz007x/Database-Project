import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import CustomizedRating from "@/components/CustomRating";
import Link from "next/link";
import checkPaidBook from "@/shared/checkpaidbook";

async function checkPaidStatus(bookId) {
    const isPaid = await checkPaidBook(bookId);
    return isPaid;
}

export default function ItemSmall(props) {
    const { property, addToCart } = props;
    const [isPaid, setIsPaid] = useState(null);

    async function fetchPaidStatus() {
        const status = await checkPaidStatus(property.bookId);
        setIsPaid(status);
    }

    useEffect(() => {
        fetchPaidStatus();
    }, []);

    const handleClick = async () => {
        await addToCart(property.bookId, property.price);
    };

    return (
        <>
            <div className="book-list-container">
                <Link
                    className="click-to-bookpage"
                    href={{
                        pathname: "/book/[bookname]",
                        query: { bookname: property.bookname },
                    }}
                >
                    <div className="book-cover">
                        <img src={property.cover} title={property.bookname} loading="lazy" />
                    </div>
                    <div className="bookname-container">
                        <h5>{property.bookname}</h5>
                    </div>
                </Link>
                <div className="author-publisher-container">
                    <h6>{property.author}</h6>
                </div>
                <div className="item-small-buttom-section">
                    <div className="rating-category-container">
                        <div className="category-container">
                            <h6>{property.categoryName}</h6>
                        </div>
                        <div className="rating-container">
                            <CustomizedRating rate={property.rating} />
                        </div>
                    </div>
                    <div className="button-container">
                        {isPaid ? (
                            <Button className="small-buy-button" variant="contained" disabled>
                                <h3>฿ {property.price}</h3>
                            </Button>
                        ) : (
                            <Button className="small-buy-button" variant="contained" onClick={handleClick}>
                                <h3>฿ {property.price}</h3>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
