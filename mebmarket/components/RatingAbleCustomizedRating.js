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

export default function RatingAbleCustomizedRating(props) {
    const { rate } = props;
    // const {onchange} = props
    const [ValueChange, setValueChange] = React.useState(props);
    return (
        <Box
            sx={{
                "& > legend": { mt: 2 },
            }}
        >
            {/* <Typography component="legend">Custom icon and color</Typography> */}
            <StyledRating
                name="customized-color"
                // defaultValue={ValueChange}
                onChange={(e, newValue) => {
                    props.onChange(e.target.value);
                    setValueChange(e.target.value);
                }}
                getLabelText={(value) =>
                    `${value} Heart${value !== 1 ? "s" : ""}`
                }
                precision={0.5}
                size="large"
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
        </Box>
    );
}
