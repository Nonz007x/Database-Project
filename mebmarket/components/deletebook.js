import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CustomizedRating from "./CustomRating";

function Deletebook(props) {
    const { property } = props;
    const handleDelete = async () => {
        try {
            const response = await fetch('/api/deletebook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    bookId: property.bookId,
                })
            });

            if (response.ok) {
                alert('Book deleted successfully');
                window.location.reload()
            } else {
                console.error('Failed to delete book');
            }
        } catch (error) {
            console.error(error);
        }
    };

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