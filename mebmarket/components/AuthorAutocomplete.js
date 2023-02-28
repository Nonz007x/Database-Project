import { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { fetcher } from "../pages/api/fetcher"

export default function AuthorAutocomplete(props) {
    const [Option, setOption] = useState([])
    const [SelectedValue, setSelectedValue] = useState(null)
    useEffect(() => {
        fetcher("http://localhost:3000/api/get").then(e => {
            const authorNameMapped = e.map(Obj => Obj.author)
            const authorFilter = [...new Set(authorNameMapped)]
            setOption(authorFilter)
        })
    }, [])
    return (
        <>
            <Autocomplete
                id="testAutocomplete"
                sx={{ width: 300 }}
                options={Option}
                renderInput={(params) => <TextField {...params} label="นักเขียน" size="small" onChange={e => {
                    props.onChange(e.target.value)
                    setSelectedValue(e.target.value)
                }} />}
                value={SelectedValue}
                freeSolo
                onChange={(e, newValue) => {
                    props.onChange(newValue)
                    setSelectedValue(newValue)
                }}
            />
        </>
    )
}