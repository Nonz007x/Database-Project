import { Button } from "@mui/material";
import CustomizedRating from "@/components/CustomRating";
import Link from "next/link";

export default function ItemSmall(props) {
    const { property } = props;
    // console.log(props)
    return (
        <>
            <Link className="book-list-container" href={{
                pathname: '/book/[bookname]',
                query: { bookname: property.bookname}
                }}>
                    <div className="book-cover">
                        <img src={property.cover} title={property.bookname} loading="lazy"/>
                    </div>
                    <div className="bookname-container">
                        <h5>{property.bookname}</h5>
                    </div>
                    <div className="category-container">
                        <h6>{property.categoryName}</h6>
                    </div>
                    <div className="buttom-section">
                        <div className="author-rating">
                            <div><h6>{property.author}</h6></div>
                            <div><h6><CustomizedRating rate={property.rating} /></h6></div>
                        </div>
                        <div className="buy-button">
                            <Button variant="contained" size="small">
                                <h6>฿ {property.price}</h6>
                            </Button>
                        </div>
                    </div>
            </Link>
        </>
    );
}