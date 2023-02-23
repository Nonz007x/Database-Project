import { Button } from "@mui/material";
import CustomizedRating from "@/components/CustomRating"


function ItemSmall(props) {
    const { property } = props;
    return (
        
        <div className="book_list" onClick={()=>{
            window.open("./book/"+property.bookname)
        }}>
            <div className="book_cover">
                <img src={property.cover} />
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
                    <div><CustomizedRating rate={property.rating}/></div>
                </div>
                <Button  variant="contained" size="small" onClick={()=>{
                    // เอาไว้ใส่คำสั่งซื้อของ
                }}><h6>฿ {property.price}</h6></Button>
            </div>
        </div>

    );
}
export default ItemSmall;