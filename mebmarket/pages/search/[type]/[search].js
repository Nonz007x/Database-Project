import { useRouter } from "next/router";
import Head from "next/head";
import { useState,useEffect,useRef } from "react";
import Navbar from "@/components/Navbar";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { fetcher } from "../../api/fetcher";
import ItemSmall from "@/components/ItemSmall";

export default function SearchPage(){
    const router = useRouter();
    const [SelectTab,setSelectTab] = useState("bookname");
    const TempInput = useRef();
    const [ResultElement,setResultElement] = useState([])
    const [Searchword,setSearchword] = useState(router.query.search)
    const [Result,setResult] = useState([])
    useEffect(()=>{
        setSelectTab(router.query.type)
        setSearchword(router.query.search)
    },[router])
    useEffect(()=>{
        fetcher("http://localhost:3000/api/search/"+SelectTab+"/"+Searchword).then((e)=>{
            setResult(e)
            // console.log(e)
        })
    },[Searchword])
    useEffect(()=>{
        const temp = Result.map((property,index)=>{
            return <ItemSmall key={`${property.bookId}-${index}`} property={property}/>
        })
        setResultElement(temp)
        // console.log("Result is",Result)
    },[Result])
    // const [Type,setType] = useState()
    const handleChange = (e)=>{
        setSelectTab(e.target.value)
    }
    return (
        <>
            <Head>
                <title>ค้นหา</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/png" href="https://www.mebmarket.com/web/assets/images/ico/favicon-32x32.png"/>
            </Head> 
                <Navbar/>
                <div className='CenterChild'>
                <div className="App">
                <div className='ItemsBox'>
                    <div className="NewestText">
                        <h2>
                            ค้นหาในร้านหนังสือ
                        </h2>
                    </div>
                    <div className="SearchArea">
                        <FormControl sx={{maxWidth:250}} fullWidth size="small" className="TypeSearch">
                            {/* <InputLabel id="demo-simple-select-label" size="small">hello</InputLabel> */}
                            <Select 
                            // variant="standard"
                            defaultValue="bookname"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={SelectTab}
                            onChange={handleChange}
                            >
                            <MenuItem value={"bookname"}>ชื่อหนังสือ</MenuItem>
                            <MenuItem value={"author"}>นักเขียน</MenuItem>
                            <MenuItem value={"publisher"}>สำนักพิมพ์</MenuItem>
                            </Select>
                        </FormControl>
                        <div className="Searchline"/>
                        <form onSubmit={(e)=>{
                            e.preventDefault();
                            setSearchword(TempInput.current)
                        }}>
                            <input type="text" placeholder="ค้นหา" onChange={e=>{TempInput.current = e.target.value}} id="SearchInput" className="SearchBarInSearchPage"/>
                        </form>
                    </div>
                    <div className="width100">
                        {ResultElement.length>0?ResultElement:<h3>ไม่มีผลการค้นหา</h3>}
                    </div>
                    {/* add here */}
                </div>
                </div>
                </div>
        </>
    );
}