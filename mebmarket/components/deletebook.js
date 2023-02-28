import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
function Deletebook(props){
    
    return (
        <div className="delete_book">
            <div className="img-and-detail">
                <div className="img_zone">
                    <img src="https://m.media-amazon.com/images/I/81sYqIT+mWL.jpg"/>
                </div>
                <div className="Detailzone">
                    <div className="detailbook">
                        <h2>Detail</h2>
                        <h4>Name : ___________</h4>
                        <h4>Author : ___________</h4>
                        <h4>Rating : ___________</h4>
                        <h4>Price : ฿___________</h4>
                        <h4>Date : ___________</h4>
                    </div>
                </div>
            </div>
            
            <div className="Trashzone">
                <Button variant="contained" size="small"><DeleteIcon></DeleteIcon></Button>
            </div>
        </div>
    )
}
export default Deletebook;