// import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
// import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
// import { useState } from "react";
// export default function ClickableFavoriteIcon({value,newValue}) {
//     const handleFavoriteClick = () => {
//         setState(!state);
//         newValue=state;
//     };
//     const [state, setState] = useState(value);
//     return (
//         <div className="favorite-zone-element" onClick={handleFavoriteClick}>
//             {state ? (
//                 <BookmarkAddedIcon className="color-var-maincolor-in-ClickableFavoriteIcon" />
//             ) : (
//                 <BookmarkAddOutlinedIcon className="color-var-maincolor-in-ClickableFavoriteIcon" />
//             )}
//             <p>อยากได้</p>
//         </div>
//     );
// }


import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { useState } from "react";

export default function ClickableFavoriteIcon({ value, onChange }) {
  const [isFavorite, setIsFavorite] = useState(value);

  const handleFavoriteClick = () => {
    const newFavoriteState = !isFavorite;
    setIsFavorite(newFavoriteState);

    if (onChange) {
      onChange(newFavoriteState);
    }
  };

  return (
    <div className="favorite-zone-element" onClick={handleFavoriteClick}>
      {isFavorite ? (
        <BookmarkAddedIcon className="color-var-maincolor-in-ClickableFavoriteIcon" />
      ) : (
        <BookmarkAddOutlinedIcon className="color-var-maincolor-in-ClickableFavoriteIcon" />
      )}
      <p>อยากได้</p>
    </div>
  );
}

