import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CustomizedRating from "./CustomRating";
function Deletebook(props){
    const {property} = props;
    return (
        <div className="delete_book">
            <div className="img-and-detail">
                <div className="img_zone">
                    <img title={property.bookname} src={property.cover} />
                </div>
                <div className="Detailzone">
                    <div className="detailbook">
                        <h3>{property.bookname}</h3>
                        <h4>Author : {property.author}</h4>
                        <h4 className="H4displayflex">Rating : <CustomizedRating rate={property.rating}/></h4>
                        <h4>Price : ฿ {property.price}</h4>
                        <h4>Date : {property.date}</h4>
                    </div>
                </div>
            </div>
            <div className="Trashzone">
                <Button variant="contained" size="large" className="EditButton"><EditIcon/></Button>
                <Button variant="contained" size="large" className="DelButton"><DeleteIcon/></Button>
            </div>
        </div>
    )
}
export default Deletebook;