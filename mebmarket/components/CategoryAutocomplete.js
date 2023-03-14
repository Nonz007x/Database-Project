import { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { fetcher } from "../pages/api/fetcher";

export default function CategoryAutocomplete(props) {
    const [Option, setOption] = useState([]);
    const [SelectedValue, setSelectedValue] = useState(null);

    useEffect(() => {
        fetcher("/api/getcategory").then((data) => {
            setOption(data.map((obj) => obj.categoryName));
            // console.log(data.map((obj) => obj.categoryName));
        });
    }, []);

    return (
        <>
            <Autocomplete
                className="fix-width-field"
                options={Option}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="ประเภท"
                        size="small"
                        onChange={(e) => {
                            props.onChange(e.target.value);
                            setSelectedValue(e.target.value);
                        }}
                    />
                )}
                value={SelectedValue}
                freeSolo
                onChange={(e, newValue) => {
                    props.onChange(newValue);
                    setSelectedValue(newValue);
                }}
            />
        </>
    );
}
