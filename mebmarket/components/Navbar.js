import Link from 'next/link'
import LoginPage from "./Login.form";
import { Button } from "@mui/material";
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
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
    }, [Search]);

    return (
        <>
            <div className="navbar-container">
                <div className="main-navbar">
                    <div id="nav-left">
                        <LoginPageMemoized />
                    </div>
                    
                    <div id="nav-middle">
                        <Link href="/">
                        <img id="logo" src={ picUrl } alt="logo_store" />
                        </Link>
                    </div>

                    <div id="nav-right">
                        <Button variant="contained" size="small" className="favoriteButton-navbar">
                            <FavoriteIcon />
                        </Button>
                        <Button variant="contained" size="small" className="shoppingCart-navbar">
                            <ShoppingCartIcon />
                        </Button>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            setSearch(Search);
                            router.push(tempSearch);
                        }}>
                            <Link className="searchIcon-navbar" href={tempSearch}>
                                <SearchIcon />
                            </Link>
                            <input className="searchBar-navbar" placeholder="ค้นหาหนังสือ" value={Search} onChange={e => {setSearch(e.target.value)}} />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
