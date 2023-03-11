import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";

export default function ClickableFavoriteIcon({ value, onChange }) {
    const handleFavoriteClick = () => {
        value = !value;
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div className="favorite-zone-element" onClick={handleFavoriteClick}>
            {value ? (
                <BookmarkAddedIcon className="color-var-maincolor-in-ClickableFavoriteIcon" />
            ) : (
                <BookmarkAddOutlinedIcon className="color-var-maincolor-in-ClickableFavoriteIcon" />
            )}
            <p>อยากได้</p>
        </div>
    );
}
