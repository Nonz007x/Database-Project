import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { useState } from "react";
export default function ClickableFavoriteIcon({value,newValue}) {
    const handleFavoriteClick = () => {
        setState(!state);
        newValue=state;
    };
    const [state, setState] = useState(value);
    return (
        <div className="favorite-zone-element" onClick={handleFavoriteClick}>
            {state ? (
                <BookmarkAddedIcon className="color-var-maincolor-in-ClickableFavoriteIcon" />
            ) : (
                <BookmarkAddOutlinedIcon className="color-var-maincolor-in-ClickableFavoriteIcon" />
            )}
            <p>อยากได้</p>
        </div>
    );
}