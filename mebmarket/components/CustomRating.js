import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
        color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
        color: "#ff3d47",
    },
});

export default function CustomizedRating(props) {
    const { rate } = props;
    let size = "small";
    if (props.size === "large") {
        size = "large";
    }
    return (
        <Box
            sx={{
                "& > legend": { mt: 2 },
            }}
        >
            {/* <Typography component="legend">Custom icon and color</Typography> */}
            <StyledRating
                name="customized-color"
                // defaultValue={rate}
                value={rate}
                getLabelText={(value) =>
                    `${value} Heart${value !== 1 ? "s" : ""}`
                }
                precision={0.1}
                size={size}
                readOnly
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
        </Box>
    );
}
