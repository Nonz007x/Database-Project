import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Checkout() {
    const { data: clientSession } = useSession();
    const [cards, setCards] = useState([{}]);
    const [cardnumber, setCardnumber] = useState("");
    const [cardHolderName, setCardHolderName] = useState("");
    const [expiry_month, setExpiry_month] = useState("");
    const [expiry_year, setExpiry_year] = useState("");
    const [billingAddress, setBillingAddress] = useState("");
    const [cvv, setCvv] = useState("");
    const [issuers, setIssuers] = useState("");
    const handlesubmit = async (e) => {
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

    return (
        <center>
            <h1>ENTER CREDIT CARD NUMBER</h1>
            <h1>{cardnumber.length}</h1>
            <form onSubmit={handlesubmit}>
                <input type="number" placeholder="cardnumber" value={cardnumber} onChange={e => {if(e.target.value.length <= 16) {setCardnumber(e.target.value)}}} />
                <br />
                <input type="text" placeholder="name" value={cardHolderName} onChange={e => setCardHolderName(e.target.value)} />
                <br />
                <input type="text" placeholder="address" value={billingAddress} onChange={e => setBillingAddress(e.target.value)} />
                <br />
                <input type="number" placeholder="cvv" value={cvv} onChange={e => {if(e.target.value.length <= 4) {setCvv(e.target.value)}}} />
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
            </form>
            <select onChange={e => { setCardnumber(e.target.value) }}>
                <option value="">--Select Card--</option>
                {cards.map((card) => (
                    <option key={card.id} value={card.id}>{card.cardnumber}</option>
                ))}
            </select>
            {/* <h2>{cards[0]}</h2> */}
            <h1>{cardnumber}</h1>
            <h1>{cardHolderName}</h1>
            <h1>{billingAddress}</h1>
            <h1>{cvv}</h1>
            <h1>{expiry_month}/{expiry_year}</h1>
            <h1>{issuers}</h1>
        </center>
    );
}