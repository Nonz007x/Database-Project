import { Button } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function CartItem(props) {
    const { property } = props;
    return (
        <>
            <div className="CartItem-container">
                <div className="CartItem-Image">
                    <img src={property.cover} />
                </div>
                <div className="CartItem-Name">
                    <h5>{property.bookname}</h5>
                    <h6>฿ {property.price}</h6>
                </div>
                <div className="CartItem-Delete">
                    <Button
                        size="small"
                        variant="outlined"
                        className="CartItem-Delete-Delete-button"
                    >
                        <DeleteOutlineOutlinedIcon />
                        ลบ
                    </Button>
                </div>
            </div>
        </>
    );
}
