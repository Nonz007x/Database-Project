import Head from "next/head";
import CartItem from "@/components/CartItems";
import { Button } from "@mui/material";
import Link from "next/link";
import { getSession, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

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

    const handleCheckout = async (e) => {
        e.preventDefault();
        // console.log(JSON.stringify(SelectedItem))
        // const isValid = validateCreditCardNumber(cardnumber);
        // if (!isValid) {
        // try {
        const response = await fetch('/api/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                SelectedItem,
                username: clientSession.user.name,
                totalPrice: totalPrice,
            }),
        });

        //     const data = await response.json();
        //     if (response.ok) {
        //         alert("ซื้อสำเร็จ");
        //     } else {
        //         alert(data);
        //     }
        // } catch (error) {
        //     console.error(error);
        // }
        // }
    }

    const validateCreditCardNumber = (cardNumber) => {
        // cardNumber = cardNumber.replace(/[^\d]/g, '');
        const d = new Date();
        const expiry = { year: d.getFullYear(), month: d.getMonth() };
        if (cardNumber.length !== 16) {
            alert("ARE YOU FUCKING GAY??")
            return false;
        } else if (expiry_month < expiry.month || expiry_year < expiry.year) {
            console.log(expiry_month, "<", expiry.month)
            console.log(expiry_year, "<", expiry.year)
            alert("บัตรหมดอายุ")
            return false;
        } else if (cvv.length !== 4) {
            alert("โคตร E3")
            return false;
        }
        alert("YOU ARE ราชา")
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
                    <Button
                        variant="contained"
                        size="medium"
                        className="purchase"
                    >
                        ชำระเงิน
                    </Button>
                </div>
            </div>

            //card
            <center>
                <h1>ENTER CREDIT CARD NUMBER</h1>
                <h1>{cardnumber.length}</h1>
                <form onSubmit={handleSaveCard}>
                    <input type="number" placeholder="cardnumber" value={cardnumber} onChange={e => { if (e.target.value.length <= 16) { setCardnumber(e.target.value) } }} />
                    <br />
                    <input type="text" placeholder="name" value={cardHolderName} onChange={e => setCardHolderName(e.target.value)} />
                    <br />
                    <input type="text" placeholder="address" value={billingAddress} onChange={e => setBillingAddress(e.target.value)} />
                    <br />
                    <input type="number" placeholder="cvv" value={cvv} onChange={e => { if (e.target.value.length <= 4) { setCvv(e.target.value) } }} />
                    <br />

                    <select id="expirySelect" value={expiry_month} onChange={(e) => {
                        setExpiry_month(e.target.value);
                    }}>
                        <option value="">--Select--</option>
                        {[...Array(12)].map((_, i) => {
                            const month = (i + 1).toString().padStart(2, '0');
                            return <option key={month} value={month}>{month}</option>;
                        })}
                    </select>

                    <select value={expiry_year} onChange={(e) => { setExpiry_year(e.target.value) }}>
                        <option value="">--Select--</option>
                        {[...Array(10)].map((_, i) => {
                            const year = (new Date().getFullYear() + i).toString().substring(-2);
                            return <option key={year} value={year}>{year}</option>;
                        })}
                    </select>

                    <select id="dropdown" onChange={e => setIssuers(e.target.value)}>
                        <option value="">--Select--</option>
                        <option value="Mastergay">Mastergay</option>
                        <option value="Visus">Visus</option>
                        <option value="Samuthprakarn Express">Samuthprakarn Express</option>
                    </select>
                    <br />
                    <button type="submit">Submit</button>
                    <button onClick={handleCheckout}>Checkout</button>
                </form>
                <select onChange={e => { setCardnumber(e.target.value) }}>
                    <option value="">--Select Card--</option>
                    {cards.map((card) => (
                        <option key={card.id} value={card.id}>{card.cardnumber}</option>
                    ))}
                </select>
            </center>
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
