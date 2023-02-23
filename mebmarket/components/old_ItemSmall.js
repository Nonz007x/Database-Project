import { Button } from "@mui/material";


function ItemSmall(props) {
    const { property } = props;
    // console.log(property)
    return (
        
        <section className="bg">
            <div className="Top">
                <img src={property.cover} />
            </div>
            <div className="Bottom">
                <h4 className="BookName">{property.bookname}</h4>
            </div>
            <div className="ButtonColor">
                <div>Cid</div>
                <Button  variant="contained" size="small"><h6>฿ {property.price}</h6></Button>
            </div>
        </section>

    );
}
export default ItemSmall;