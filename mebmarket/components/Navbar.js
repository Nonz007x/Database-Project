import Link from 'next/link'
import LoginPage from "./Login.form";
import { Button } from "@mui/material";
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function Navbar() {
    const router = useRouter();
    const picUrl = "https://www.mebmarket.com/web/dist/assets/images/logo_store.png?1687";
    const LoginPageMemoized = React.memo(LoginPage);
    const [Search, setSearch] = useState("");
    const [tempSearch, setTempSearch] = useState("/search/bookname/default")
    useEffect(() => {
        if (Search !== ''){
            setTempSearch("/search/bookname/" + Search)
        } else {
            setTempSearch("/search/bookname/default")
        }
}, [Search])

return (
    <div className="BG">
        <div id="left">
            <LoginPageMemoized />
            <Link href="http://localhost:3000/admin" className="LinkWithOutUnderLine">
                <Button className="NavbarButton" size="small" variant="contained">
                    <EditIcon />
                    Admin
                </Button>
            </Link>
            <Link href="http://localhost:3000/addbook" size="small" className="LinkWithOutUnderLine">
                <Button className="NavbarButton" size="small" variant="contained">
                    <AutoStoriesIcon />
                    เพิ่มหนังสือ
                </Button>
            </Link>
        </div>

        <div id="midle">
            <Link href="/">
                <img id="logo" src={picUrl} />
            </Link>
        </div>
        <div id="right">
            <Button variant="contained" size="small" className="NavbarButton">
                <FavoriteIcon />
            </Button>
            <Button variant="contained" size="small" className="NavbarButton" id="addShoppingCartIconMargin">
                <ShoppingCartIcon />
            </Button>
            <form onSubmit={(e) => {
                e.preventDefault();
                setSearch(Search);
                router.push(tempSearch);
            }}>
                <Link className="NavbarLink" href={tempSearch}>
                    <SearchIcon id="SearchIcon" />
                </Link>
                <input className="SearchBar" placeholder="ค้นหาหนังสือ" value={Search} onChange={e => {setSearch(e.target.value)}} />
            </form>
        </div>
    </div>

);
}
export default Navbar;