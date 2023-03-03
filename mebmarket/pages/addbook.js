import Navbar from "@/components/Navbar";
import { TextField } from "@mui/material";
import Head from "next/head";
import { Button } from "@mui/material";
import AuthorAutocomplete from "@/components/AuthorAutocomplete";
import { useRef, useState } from "react";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import CheckIcon from '@mui/icons-material/Check';

export default function addbook() {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/api/addbook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                bookId: BookId,
                bookname: Bookname,
                cover: ImgLink,
                author: Author,
                price: Price,
                synopsis: Synopsis,
                date: date
            })
        }).then(e => e.json()).then(data => {
            alert(JSON.stringify(data));
        });
    }
    const [BookId, setBookId] = useState([])
    const [Bookname, setBookname] = useState([])
    const [ImgLink, setImgLink] = useState("https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/book%20placeholder.png")
    const [Author, setAuthor] = useState(0) //นักเขียน
    const [Price, setPrice] = useState([])
    const [Synopsis, setSynopsis] = useState([])
    const TempImg = useRef(0)
    
    return (
        <>
            <Head>
                <title>meb: เพิ่มหนังสือ</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/png" href="https://www.mebmarket.com/web/assets/images/ico/favicon-32x32.png" />
            </Head>
            <Navbar />
            <div className='CenterChild'>
            <div className="App">
            <div className='ItemsBox'>
            <div className="addbook_container">
                <div className="addbook_name_container">
                    <TextField size="large" label="ชื่อหนังสือ" sx={{ width: 500 }} value={Bookname} onChange={(e) => {
                            setBookname(e.target.value)
                    }} />
                </div>
                <div className="addbook_img_and_detail">
                    <div className="addbook_cover_preview">
                        <img src={ImgLink} className="cover_preview" />
                    </div>
                    <div className="addbook_input_field">
                        <div className="addbook_cover_container">
                            <p>ภาพหน้าปก</p>
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                (TempImg.current && 1) ? setImgLink(TempImg.current) :
                                    setImgLink("https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/book%20placeholder.png")
                            }}
                            >
                                <TextField size="small" label="Url Image" className="fix-width-field" onChange={(e) => { TempImg.current = e.target.value }} />
                                <Button variant="contained" type="submit" className="add_cover_submit">ยืนยัน</Button>
                            </form>
                        </div>
                        <div className="addbook_detail">
                            <p>รหัสหนังสือ</p>
                            <TextField size="small" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="ไอดีหนังสือ" className="fix-width-field" value={BookId} onChange={e => { setBookId(e.target.value) }} />
                            <p>นักเขียน</p>
                            <div className="author_verify">
                                <AuthorAutocomplete onChange={e => setAuthor(e)} />
                                {(Author) && 1 ? <CheckIcon /> : <div />}
                            </div>
                            <p>ราคา</p>
                            <TextField size="small" className="fix-width-field" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="ราคา" value={Price} onChange={e => { setPrice(e.target.value) }} />
                        </div>
                    </div>
                </div>
                <TextField
                    className="add_synopsis"
                    label="เนื้อเรื่องย่อ"
                    multiline
                    maxRows={3}
                    value={Synopsis}
                    onChange={(e) => {
                        setSynopsis(e.target.value)
                    }}
                />
                <div className="Bottom_Submit_warp">
                    <Button onClick={handleFormSubmit}
                    variant="contained" className="Submit_Button"><LocalLibraryIcon />เพิ่มหนังสือ</Button>
                </div>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}