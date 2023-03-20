import { Button } from "@mui/material";
import CustomizedRating from "@/components/CustomRating";
import Link from "next/link";

export default function ItemSmall(props) {
    const { property } = props;

    return (
        <>
            <div className="book-list-container">
                <Link
                    className="click-to-bookpage"
                    href={{
                        pathname: "/book/[bookname]",
                        query: { bookname: property.bookname}
                    }}
                >
                    <div className="book-cover">
                        <img
                            src={property.cover}
                            title={property.bookname}
                            loading="lazy"
                        />
                    </div>
                    <div className="bookname-container">
                        <h5>{property.bookname}</h5>
                    </div>
                </Link>
                <div className="author-publisher-container">
                    <h6>{ property.author }</h6>
                </div>
                <div className="item-small-buttom-section">
                    <div className="rating-category-container">
                        <div className="category-container">
                            <h6>{ property.categoryName }</h6>
                        </div>
                        <div className="rating-container">
                            <CustomizedRating rate={property.rating} />
                        </div>
                    </div>
                    <div className="button-container">
                        <Button
                            className="small-buy-button"
                            variant="contained"
                            onClick={() => alert("add to cart button")}
                        >
                            <h3>฿ { property.price }</h3>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
