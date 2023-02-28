import Navbar from "@/components/Navbar";
import { TextField } from "@mui/material";
import Head from "next/head";
import {Button} from "@mui/material";
import AuthorAutocomplete from "@/components/AuthorAutocomplete";
import { useEffect, useRef, useState } from "react";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { getdate } from "@/shared/getdate";

export default function addbook() {
    const Date = getdate()
    const [DateData,setDateData] = useState([])
    useEffect(()=>{setDateData(Date)},[Date])
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        fetch('http://localhost:3000/api/addbook', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            bookId :BookId,
            bookname: Bookname,
            cover:ImgLink,
            author:author,
            price:Price,
            synopsis: Synopsis,
            date:DateData
          })
        }).then(e => e.json()).then(data => {
          alert(JSON.stringify(data));
        });
      }
    const [BookId,setBookId] = useState([])
    const [Bookname,setBookname] = useState([])
    const [ImgLink,setImgLink] = useState("https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/book%20placeholder.png")
    const [Author,setAuthor] = useState([]) //นักเขียน
    const [Price,setPrice] = useState([])
    const [Synopsis,setSynopsis] = useState([])
    const TempImg = useRef(0)
    return (
        <>
            <Head>
                <title>meb: เพิ่มหนังสือ</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/png" href="https://www.mebmarket.com/web/assets/images/ico/favicon-32x32.png"/>
            </Head>
            <>
                <Navbar/>
                <div className="book_bookname_Container">
                    <div className="book_bookname_PageAdjust">
                        <TextField size="large" label="ชื่อหนังสือ" sx={{width:500}} value={Bookname} onChange={(e)=>{
                            setBookname(e.target.value)
                        }}/>
                        <div    className="book_book_ItemAndDetail">
                            <img src={ImgLink} className="book_Img"/>
                            <div id="Detail">
                                <div id="data_author_publisher_category">
                                    <div className="addbook_input_feild">
                                        <p>ภาพหน้าปก</p>
                                        <form onSubmit={(e)=>{
                                            e.preventDefault();
                                            (TempImg.current && 1)? setImgLink(TempImg.current):
                                            setImgLink("https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/book%20placeholder.png")}}
                                            > {/*ใส่ภาพลงใน useState ImgLink*/}
                                            
                                            <TextField size="small" label="Url Image" onChange={(e)=>{TempImg.current = e.target.value }}/>
                                            <Button variant="contained" type="submit" className="Submit_Button">ยืนยัน</Button>
                                        </form>
                                        <p>รหัสหนังสือ</p>
                                        <TextField size="small" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="ไอดีหนังสือ" value={BookId} onChange={e=>{setBookId(e.target.value)}}/>
                                        <p>นักเขียน</p>
                                        <AuthorAutocomplete onChange={e=>setAuthor(e)}/>
                                        {Author}
                                        <p>ราคา</p>
                                        <TextField size="small" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="ราคา" value={Price} onChange={e=>{setPrice(e.target.value)}}/>
                                    </div>
                                    {/* <p>สำนักพิมพ์ <a href="">//ยังไม่มีสำนักพิมพ์</a></p>
                                    <p>หมวดหมู่ <a href="">//ยังไม่มี Catagory</a></p> */}
                                </div>
                            </div>
                        </div>
                        <div className="synopsis">
                            <TextField
                                className="MultilineTextFeild"
                                id="outlined-multiline-flexible"
                                label="เนื้อเรื่องย่อ"
                                multiline
                                maxRows={6}
                                value={Synopsis}
                                onChange={(e)=>{
                                    setSynopsis(e.target.value)
                                }}
                            />
                            <div className="Bottom_Submit_warp">
                                <Button onClick={handleFormSubmit}
                                variant="contained" className="Submit_Button"><LocalLibraryIcon/>เพิ่มหนังสือ</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </>
    )
}