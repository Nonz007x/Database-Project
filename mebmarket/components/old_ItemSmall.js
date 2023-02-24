import { Button } from "@mui/material";
import CustomizedRating from "@/components/CustomRating"
function ItemSmall() {
    return (
        
        <div className="book_list">
            <div className="book_cover">
                <img src="https://upload.wikimedia.org/wikipedia/en/d/db/Actageshonenjump.jpg"/>
            </div>
            <div className="book_name">
                <h4>Act-Age</h4>
            </div>
            <div className="cate">
                <h6>Good</h6>
            </div>
            <div className="bottom_section">
                <div className="authur_rating">
                    <div><h6>Cid</h6></div>
                    <div><CustomizedRating rate="3"/></div>
                </div>
                <Button  variant="contained" size="small" onClick={()=>{
                    // เอาไว้ใส่คำสั่งซื้อของ
                }}><h6>฿ 60</h6></Button>
            </div>
        </div>

    );
}
export default ItemSmall;