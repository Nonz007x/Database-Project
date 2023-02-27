import { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import {fetcher}  from "../pages/api/fetcher"

export default function AuthorAutocomplete(){
    const [Option,setOption] = useState([])
    const [SelectedValue,setSelectedValue] = useState(null)
    useEffect(()=>{
        fetcher("http://localhost:3000/api/get").then(e=>{
            const authorNameMapped = e.map(Object=>Object.authorName)
            const authorFilter = [...new Set(authorNameMapped)]
            setOption(authorFilter)
        })
    },[])
    return (
        <>
            <Autocomplete
                options={Option}
                renderInput={(params)=> <TextField {...params} />}
                freeSolo
                onChange={(e,newValue)=>{
                    setSelectedValue(newValue)
                    // console.log(SelectedValue)
                }}
            />
        </>
    )
}