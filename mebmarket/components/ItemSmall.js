import { Button } from "@mui/material";


function ItemSmall(props) {
    const { property } = props;
    console.log(property)
    return (
        
        <div className="book_list">
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
                    <div><h6>authur</h6></div>
                    <div><h6>rating</h6></div>
                </div>
                <Button  variant="contained" size="small"><h6>฿ {property.price}</h6></Button>
            </div>
        </div>

    );
}
export default ItemSmall;