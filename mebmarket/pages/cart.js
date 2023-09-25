import Head from "next/head";
import CartItem from "@/components/CartItems";
import { Button, Collapse, FormControl, InputLabel, Menu } from "@mui/material";
import Link from "next/link";
import { getSession, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { TextField } from "@mui/material";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
export default function Cart({ CartData, username }) {
    const { data: clientSession } = useSession();
    // card
    const [cards, setCards] = useState([{}]);
    const [cardnumber, setCardnumber] = useState("");
    const [cardHolderName, setCardHolderName] = useState("");
    const [expiry_month, setExpiry_month] = useState("");
    const [expiry_year, setExpiry_year] = useState("");
    const [billingAddress, setBillingAddress] = useState("");
    const [cvv, setCvv] = useState("");
    const [issuers, setIssuers] = useState("")

    const [addcardCollapse, setAddcardCollapse] = useState(false)

    const handleSaveCard = async (e) => {
        e.preventDefault();
        const isValid = validateCreditCardNumber(cardnumber);
        if (isValid) {
            try {
                const response = await fetch("/api/cards/addcard", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams({
                        username: clientSession.user.name,
                        cardNumber: cardnumber,
                        cardHolderName: cardHolderName,
                        expiry_month: expiry_month,
                        expiry_year: expiry_year,
                        billingAddress: billingAddress,
                        cvv: cvv,
                    }),
                });
                const data = await response.json();
                if (response.ok) {
                    alert("เพิ่มบัตรสำเร็จ");
                } else {
                    alert(data);
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    const handleSelectCard = async (e) => {
        e.preventDefault();
        const card = cards[0]
        setCardnumber(card.cardNumber)
        setCardHolderName(card.cardHolderName)
        setExpiry_month(card.expiry_month)
        setExpiry_year(card.expiry_year)
        setBillingAddress(card.billingAddress)
        setCvv(card.cvv)
    }

    const handleCheckout = async (e) => {
        e.preventDefault();
        const isValid = validateCreditCardNumber(cardnumber);
        if (!isValid) {
            return false;
        }
        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    SelectedItem,
                    username: clientSession.user.name,
                    totalPrice: totalPrice,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                alert("ซื้อสำเร็จ");
                location.reload();
            } else {
                alert(data);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const validateCreditCardNumber = () => {
        const cleanedCardNumber = cardnumber.replace(/[^\d]/g, '');
    
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
    
        if (cleanedCardNumber.length !== 16) {
            alert("กรุณากรอกเลขบัตรให้ครบ 16 หลัก");
            return false;
        }
    
        const parsedExpiryMonth = parseInt(expiry_month, 10);
        const parsedExpiryYear = parseInt(expiry_year, 10);
    
        if (parsedExpiryYear < currentYear || (parsedExpiryYear === currentYear && parsedExpiryMonth < currentMonth)) {
            alert("บัตรหมดอายุ");
            return false;
        }
    
        if (cvv.length !== 4) {
            alert("กรุณากรอกเลขบัตรให้ครบ 4 หลัก");
            return false;
        }
    
        return true;
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/api/cards/getcard", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    username: clientSession.user.name,
                }),
            });
            const data = await response.json();
            setCards(data);
        }
        if (clientSession) {
            fetchData();
        }
    }, [clientSession]);
    // card end

    const [SSRdata, setSSRdata] = useState(CartData);
    const [BookData, setBookData] = useState(CartData);
    const [checkedItems, setCheckedItems] = useState(
        Array(SSRdata.length).fill(true)
    );
    const [itemPrices, setItemPrices] = useState(
        Array(SSRdata.length)
            .fill(0)
            .map((price, index) => {
                return checkedItems[index] ? SSRdata[index].price : 0;
            })
    );
    //ใช้สำหรับ post ซื้อ
    const [SelectedItem, setSelectedItem] = useState(
        Array(SSRdata.length)
            .fill("")
            .map((data, index) => {
                return checkedItems[index] ? SSRdata[index] : "";
            })
    );
    const handleCheckboxChange = (index) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);

        const newItemPrices = [...itemPrices];
        newItemPrices[index] = newCheckedItems[index]
            ? SSRdata[index].price
            : 0;
        setItemPrices(newItemPrices);
    };
    const handleDelete = async (bookId) => {
        const res = await fetch("http://localhost:3000/api/cart/cartdel", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                bookId: bookId,
                username: username,
            }),
        });
        const temp = await fetchData(username);
        // console.log(temp)
        location.reload();
    };

    useEffect(() => {
        const newItem = checkedItems.map((isChecked, index) =>
            isChecked ? SSRdata[index] : ""
        );
        setSelectedItem(newItem);
    }, [checkedItems, SSRdata]);
    const totalPrice = itemPrices.reduce((acc, cur) => acc + cur, 0);

    return (
        <>
            <Head>
                <title>ตะกร้า</title>
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
            <h1 className="cart-header">ตะกร้า</h1>
            <div className="center-cart-items">
                <div className="Cart-Items-container">
                    {Object.values(BookData).map((property, index) => {
                        return (
                            <li className="Items-row" key={index}>
                                <input
                                    type="checkbox"
                                    checked={checkedItems[index]}
                                    onChange={() => {
                                        handleCheckboxChange(index);
                                    }}
                                />
                                {/* <CheckBox value={property.price}/> */}
                                <CartItem property={property} />
                                <div className="CartItem-Delete">
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        className="CartItem-Delete-Delete-button"
                                        onClick={() => {
                                            handleDelete(property.bookId);
                                        }}
                                    >
                                        <DeleteOutlineOutlinedIcon />
                                        ลบ
                                    </Button>
                                </div>
                            </li>
                        );
                    })}
                </div>
                <Link href="/">
                    <h5 className="select-other-book">
                        เลือกหนังสือเล่มอื่นต่อ
                    </h5>
                </Link>
            </div>
            <div className="totalPrice-wrap">
                <div className="display-totalPrice">
                    <h3>ยอดชำระ ฿{totalPrice}</h3>
                    {SelectedItem.length < 1 ?
                        (
                            <Button
                                variant="contained"
                                size="medium"
                                className="purchase"
                                disabled
                            >
                                ชำระเงิน
                            </Button>
                        )
                        : (
                            <Button
                                variant="contained"
                                size="medium"
                                className="purchase"
                                onClick={handleCheckout}
                            >
                                ชำระเงิน
                            </Button>
                        )
                    }
                </div>
            </div>
            {/* start here */}
            <center>
                <h1>เลือก Credit card</h1>
                <select onChange={handleSelectCard}>
                    <option value="">--Select Card--</option>
                    {cards[0] ? <option key={1} value={cards[0]?.cardNumber}>{cards[0]?.cardNumber}</option>
                    :null}
                    {/* {cards.map((card) => (
                        <option key={card.id} value={card[0].cardnumber}>{card[0].cardnumber}</option>
                    ))} */}
                </select>
                {/* <FormControl className="cardtypeform"><InputLabel>Selecte exist card</InputLabel>
                    <Select
                        value={cardnumber}
                        onChange={e => { setCardnumber(e.target.value) 
                        console.log(e.target.value)}}
                        label="Selecte exist card"
                    >
                        {cards.length > 0 ?
                            Object.values(cards).map((data, index) => {
                                return <MenuItem value={data.id} key={index}>{data.cardnumber}</MenuItem>
                            }) : <MenuItem>--ไม่พบข้อมูลบัตร--</MenuItem>
                        } :


                        <MenuItem value={"Mastercard"}>Mastercard</MenuItem>
                        <MenuItem value={"Visa"}>Visa</MenuItem>
                        <MenuItem value={"Union Pay"}>Union Pay</MenuItem>

                    </Select>
                </FormControl> */}
                <h2>or</h2>
                <Button sx={{ margin: 1 }} onClick={e => {
                    setAddcardCollapse(!addcardCollapse);
                }} className="purchase" variant="contained">{addcardCollapse ? "ปิดหน้าเพิ่มบัตร" : "เพิ่มบัตรเครดิต"}</Button>
            </center>
            {/*end here */}
            <Collapse in={addcardCollapse}>


                <center>
                    <h1>ENTER CREDIT CARD NUMBER</h1>
                    {/* <h1>{cardnumber.length}</h1> */}
                    <form onSubmit={handleSaveCard} className="credit-card-form">
                        {/* <TextField className="credit-card-input-field" variant="outlined" type="number" label="card number" 
                        value={cardnumber} onChange={e => { if (e.target.value.length <= 16) { setCardnumber(e.target.value) } }} /> */}
                        <TextField className="credit-card-input-field"
                            variant="outlined"
                            type="number"
                            label="card number"
                            value={cardnumber}
                            onChange={e => setCardnumber(e.target.value.length > 16 ? cardnumber : e.target.value)}
                        />
                        <TextField className="credit-card-input-field" variant="outlined" type="text" label="name" value={cardHolderName} onChange={e => setCardHolderName(e.target.value)} />
                        <TextField className="credit-card-input-field" variant="outlined" type="text" label="address" value={billingAddress} onChange={e => setBillingAddress(e.target.value)} />
                        <TextField className="credit-card-input-field" variant="outlined" type="number" label="cvv" value={cvv} onChange={e => { if (e.target.value.length <= 4) { setCvv(e.target.value) } }} />
                        {/* <input className="credit-card-input-field" type="number" placeholder="cardnumber" value={cardnumber} onChange={e => { if (e.target.value.length <= 16) { setCardnumber(e.target.value) } }} />
                    <input className="credit-card-input-field" type="text" placeholder="name" value={cardHolderName} onChange={e => setCardHolderName(e.target.value)} />
                    <input className="credit-card-input-field" type="text" placeholder="address" value={billingAddress} onChange={e => setBillingAddress(e.target.value)} />
                    <input className="credit-card-input-field" type="number" placeholder="cvv" value={cvv} onChange={e => { if (e.target.value.length <= 4) { setCvv(e.target.value) } }} /> */}
                        <div>
                            <Select id="expirySelect" value={expiry_month} onChange={(e) => {
                                setExpiry_month(e.target.value);
                            }}>
                                {/* <option value="">--Select--</option> */}
                                {[...Array(12)].map((_, i) => {
                                    const month = (i + 1).toString().padStart(2, '0');
                                    return <MenuItem key={month} value={month}>{month}</MenuItem>;
                                })}
                            </Select>/
                            <Select value={expiry_year} onChange={(e) => { setExpiry_year(e.target.value) }}>
                                {/* <option value="">--Select--</option> */}
                                {[...Array(10)].map((_, i) => {
                                    const year = (new Date().getFullYear() + i).toString().substring(-2);
                                    return <MenuItem key={year} value={year}>{year}</MenuItem>;
                                })}
                            </Select>
                        </div>


                        {/* <select id="dropdown" onChange={e => setIssuers(e.target.value)}>
                        <option value="">--Select--</option>
                        <option value="Mastercard">Mastercard</option>
                        <option value="Visa">Visa</option>
                    </select> */}

                        {/* <Select
                        labelId="selectcard"
                        className="select-card-type"
                        // defaultValue="SELECT"
                        label="hi"
                        onChange={e => setIssuers(e.target.value)}
                    >
                        <MenuItem value="SELECT">SELECT</MenuItem>
                        <MenuItem value="Mastercard">Mastercard</MenuItem>
                        <MenuItem value="Visa">Visa</MenuItem>
                    </Select> */}
                        <FormControl className="cardtypeform"><InputLabel>Card type</InputLabel>
                            <Select
                                value={issuers}
                                onChange={e => { setIssuers(e.target.value) }}
                                label="Card type"
                            >
                                <MenuItem value={"Mastercard"}>Mastercard</MenuItem>
                                <MenuItem value={"Visa"}>Visa</MenuItem>
                                <MenuItem value={"Union Pay"}>Union Pay</MenuItem>
                            </Select>
                        </FormControl>
                        <div className="credit-card-button-zone">
                            <Button className="credit-card-button" variant="contained" type="submit">Save</Button>
                        </div>
                        {/* <button type="submit">Submit</button>
                    <button onClick={handleCheckout}>Checkout</button> */}
                    </form>

                </center>
            </Collapse>
        </>
    );
}

export async function getServerSideProps(context) {
    const res = await getSession(context);
    if (res === "" || res === null) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        }
    }
    const username = res.user.name;
    // const CartData = fetchData();
    const CartData = await fetchData(username);
    return {
        props: { CartData, username },
    };
}
export async function fetchData(username) {
    const res = await fetch("http://localhost:3000/api/cart/getcart", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            username: username,
        }),
    });
    const data = await res.json();
    return data;
}
