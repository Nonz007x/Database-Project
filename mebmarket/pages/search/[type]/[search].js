import { useRouter } from "next/router";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { fetcher } from "../../api/fetcher";
import ItemSmall from "@/components/ItemSmall";
import { TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import addToCart from "@/shared/addtocart";

export default function SearchPage() {
    const router = useRouter();
    const [SelectTab, setSelectTab] = useState("bookname");
    const TempInput = useRef();
    const [ResultElement, setResultElement] = useState([])
    const [Searchword, setSearchword] = useState(router.query.search)
    const [Result, setResult] = useState([])

    useEffect(() => {
        setSelectTab(router.query.type)
        setSearchword(router.query.search)
    }, [router])

    useEffect(() => {
        fetcher("/api/search/" + SelectTab + "/" + Searchword).then((e) => {
            setResult(e)
        })
    }, [Searchword])

    useEffect(() => {
        const temp = Result.map((property, index) => {
            return <ItemSmall key={`${property.bookId}-${index}`} property={property} addToCart={addToCart} />
        })
        setResultElement(temp)

    }, [Result])

    const handleChange = (e) => {
        setSelectTab(e.target.value)
    }
    return (
        <>
            <Head>
                <title>ค้นหา</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/png" href="https://www.mebmarket.com/web/assets/images/ico/favicon-32x32.png" />
            </Head>
            <div className="search-page-container">
                <div className="heading-search-page">
                    <h2>
                        ค้นหาในร้านหนังสือ
                    </h2>
                </div>
                <div className="search-area">
                    <FormControl sx={{ width: 250 }}>
                        <Select
                            defaultValue="bookname"
                            value={SelectTab}
                            onChange={handleChange}
                        >
                            <MenuItem value={"bookname"}>ชื่อหนังสือ</MenuItem>
                            <MenuItem value={"author"}>นักเขียน</MenuItem>
                        </Select>
                    </FormControl>
                    <div className="Searchline" />
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setSearchword(TempInput.current)
                    }}>
                        <TextField type="text" placeholder="ค้นหา" onKeyDown={e => {
                            if (e.key === 'Enter') {
                                TempInput.current = e.target.value;
                            }
                        }} />
                    </form>
                </div>
                <div className="search-page-result">
                    {ResultElement.length ? ResultElement : <h3>ไม่มีผลการค้นหา</h3>}
                </div>
            </div>
        </>
    );
}