import { Button } from "@mui/material";


function ItemSmall(props) {
    const { property } = props;
    return (
        
        <section className="bg">
            <div className="Top">
                <img src={property.src} />
            </div>
            <div className="Bottom">
                <h4>{property.title}</h4>
                <Button variant="contained" size="small"><h6>฿ {property.price}</h6></Button>
            </div>
        </section>

    );
}
export default ItemSmall;