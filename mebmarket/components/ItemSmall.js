import { Button } from "@mui/material";


function ItemSmall(props) {
    const { title, src, price } = props;
    return (

        <div className="bg">
            <div className="Top">
                <img src={src} />
            </div>
            <div className="Bottom">
                <h4>{title}</h4>
                <Button variant="contained" size="small"><h6>{price}</h6></Button>
            </div>
        </div>

    );
}
export default ItemSmall;