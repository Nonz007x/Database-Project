import { TextField } from "@mui/material";
import Head from "next/head";
import { Button } from "@mui/material";
import AuthorAutocomplete from "@/components/AuthorAutocomplete";
import { useRef, useState } from "react";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import CheckIcon from "@mui/icons-material/Check";
import { requireAuthentication } from "@/utils/requireAuthentication";

export default function addbook() {
    const [bookId, setBookId] = useState("");
    const [bookname, setBookname] = useState("");
    const [imgLink, setImgLink] = useState(
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/book%20placeholder.png"
    );
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [synopsis, setSynopsis] = useState("");
    const tempImg = useRef(0);
    const [category,setCategory] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/addbook", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    bookId: bookId,
                    bookname: bookname,
                    cover: imgLink,
                    author: author,
                    price: price,
                    synopsis: synopsis,
                    // category:
                }),
            });
            const data = await response.json();
            if (response.ok) {
                alert("เพิ่มหนังสือสำเร็จ");
            } else {
                alert(JSON.stringify(data));
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Head>
                <title>meb: เพิ่มหนังสือ</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="https://www.mebmarket.com/web/assets/images/ico/favicon-32x32.png"
                />
            </Head>

            <div className="addbook_container">
                <div className="addbook_name_container">
                    <TextField
                        size="large"
                        label="ชื่อหนังสือ"
                        sx={{ width: 500 }}
                        value={bookname}
                        onChange={(e) => {
                            setBookname(e.target.value);
                        }}
                    />
                </div>
                <div className="addbook_img_and_detail">
                    <div className="addbook_cover_preview">
                        <img src={imgLink} className="cover_preview" />
                    </div>
                    <div className="addbook_input_field">
                        <div className="addbook_cover_container">
                            <p>ภาพหน้าปก</p>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    tempImg.current && 1
                                        ? setImgLink(tempImg.current)
                                        : setImgLink(
                                              "https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/book%20placeholder.png"
                                          );
                                }}
                            >
                                <TextField
                                    size="small"
                                    label="Url Image"
                                    className="fix-width-field"
                                    onChange={(e) => {
                                        tempImg.current = e.target.value;
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    type="submit"
                                    className="add_cover_submit"
                                >
                                    ยืนยัน
                                </Button>
                            </form>
                        </div>
                        <div className="addbook_detail">
                            <p>รหัสหนังสือ</p>
                            <TextField
                                size="small"
                                inputProps={{
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                }}
                                label="ไอดีหนังสือ"
                                className="fix-width-field"
                                value={bookId}
                                onChange={(e) => {
                                    setBookId(e.target.value);
                                }}
                            />
                            <p>นักเขียน</p>
                            <div className="author_verify">
                                <AuthorAutocomplete
                                    onChange={(e) => setAuthor(e)}
                                />
                                {author && 1 ? <CheckIcon /> : <div />}
                            </div>
                            <p>ราคา</p>
                            <TextField
                                size="small"
                                className="fix-width-field"
                                inputProps={{
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                }}
                                label="ราคา"
                                value={price}
                                onChange={(e) => {
                                    setPrice(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <TextField
                    className="add_synopsis"
                    label="เนื้อเรื่องย่อ"
                    multiline
                    maxRows={3}
                    value={synopsis}
                    onChange={(e) => {
                        setSynopsis(e.target.value);
                    }}
                />
                <div className="Bottom_Submit_warp">
                    <Button
                        onClick={handleFormSubmit}
                        variant="contained"
                        className="Submit_Button"
                    >
                        <LocalLibraryIcon />
                        เพิ่มหนังสือ
                    </Button>
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    return requireAuthentication(context, ({ session }) => {
        return {
            props: { session },
        };
    });
}
