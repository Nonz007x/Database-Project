import { Button } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function CartItem(props) {
    const { property, username } = props;
    const handleDelete = async () => {
        const res = await fetch("http://localhost:3000/api/cart/cartdel", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                bookId: property.bookId,
                username: username,
            }),
        });
        const resJson = await res.json();
        console.log(resJson);
    };
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
                        onClick={handleDelete}
                    >
                        <DeleteOutlineOutlinedIcon />
                        ลบ
                    </Button>
                </div>
            </div>
        </>
    );
}
