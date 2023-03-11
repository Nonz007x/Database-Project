import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import CartItem from "@/components/CartItems";
import { CheckBox } from "@mui/icons-material";

export default function Cart() {
    const router = useRouter();
    const username = router.query.username;
    const tempData = [
        {
            bookname: "Poon",
            cover: "https://pbs.twimg.com/media/FdMNYFkWAAAxu4k.jpg",
            price: 60,
        },
        {
            bookname: "notPoon",
            cover: "https://pbs.twimg.com/media/FdMNYFkWAAAxu4k.jpg",
            price: 56,
        },
    ];
    const [checkedItems, setCheckedItems] = useState(
        Array(tempData.length).fill(true)
    );
    const [itemPrices, setItemPrices] = useState(
        Array(tempData.length)
            .fill(0)
            .map((price, index) => {
                return checkedItems[index] ? tempData[index].price : 0;
            })
    );

    const handleCheckboxChange = (index) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);

        const newItemPrices = [...itemPrices];
        newItemPrices[index] = newCheckedItems[index]
            ? tempData[index].price
            : 0;
        setItemPrices(newItemPrices);
    };
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
            <h1 className="book_bookname_Bookname">ตะกร้า</h1>
            <div className="center-cart-items">
                <div className="Cart-Items-container">
                    {Object.values(tempData).map((property, index) => {
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
                            </li>
                        );
                    })}
                </div>
            </div>
            <div className="totalPrice-wrap">
                <div className="display-totalPrice">
                    totalPrice: {totalPrice}
                </div>
            </div>
        </>
    );
}
