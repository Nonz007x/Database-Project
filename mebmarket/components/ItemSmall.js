import { Button } from "@mui/material";
import CustomizedRating from "@/components/CustomRating";
import Link from "next/link";

export default function ItemSmall(props) {
    const { property } = props;
    return (
        <>
            <Link className="book_list" href={{
                pathname: 'http://localhost:3000/book/[bookname]',
                query: { bookname: property.bookname}
            }}>
                    <div className="book_cover">
                        <img title={property.bookname} src={property.cover} />
                    </div>
                    <div className="book_name">
                        <h4>{property.bookname}</h4>
                    </div>
                    <div className="cate">
                        <h6>cate</h6>
                    </div>
                    <div className="bottom_section">
                        <div className="authur_rating">
                            <div><h6>{property.author}</h6></div>
                            <div><CustomizedRating rate={property.rating} /></div>
                        </div>
                        <Button variant="contained" size="small" onClick={() => {
                            // เอาไว้ใส่คำสั่งซื้อของ
                        }}><h6>฿ {property.price}</h6></Button>
                    </div>
            </Link>
        </>
    );
}