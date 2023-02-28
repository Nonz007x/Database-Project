import { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import {fetcher}  from "../pages/api/fetcher"

export default function AuthorAutocomplete(props){
    // console.log(props)
    const [Option,setOption] = useState([])
    const [SelectedValue,setSelectedValue] = useState(null)
    useEffect(()=>{
        fetcher("http://localhost:3000/api/get").then(e=>{
            const authorNameMapped = e.map(Object=>Object.author)
            const authorFilter = [...new Set(authorNameMapped)]
            setOption(authorFilter)
        })
    },[])
    return (
        <>
            <Autocomplete
                id="testAutocomplete"
                sx={{width:300}}
                options={Option}
                renderInput={(params)=> <TextField {...params} label="นักเขียน" size="small"/>}
                value={SelectedValue}
                freeSolo
                onChange={(e,newValue)=>{
                    props.onChange(newValue)
                    setSelectedValue(newValue)
                }}
            />
        </>
    )
}