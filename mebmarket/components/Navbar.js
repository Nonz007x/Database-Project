import { useState } from "react";
import LoginPage from "./Login.form";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material";
import Link from 'next/link'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function Navbar() {
    const picUrl = "https://www.mebmarket.com/web/dist/assets/images/logo_store.png?1687";
    const [Search, setSearch] = useState("");
    return (
        <div className="BG">
            <div id="left">
                <LoginPage/>
                <Link href="http://localhost:3000/admin" className="LinkWithOutUnderLine">
                    <Button className="NavbarButton" size="small" variant="contained">
                        <EditIcon/>
                        Admin
                    </Button>
                </Link>
                <Link href="http://localhost:3000/addbook" size="small" className="LinkWithOutUnderLine">
                    <Button className="NavbarButton" size="small" variant="contained">
                        <AutoStoriesIcon/>
                        เพิ่มหนังสือ
                    </Button>
                </Link>
            </div>
            
            <div id="midle">
                <Link href = "/">
                        <img id="logo" src={picUrl} />
                </Link>
            </div>
                <div id="right">
                    <Button variant="contained" size="small" className="NavbarButton">
                        <FavoriteIcon/>
                    </Button>
                    <Button variant="contained" size="small" className="NavbarButton" id="addShoppingCartIconMargin">
                        <ShoppingCartIcon />
                    </Button>
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        // console.log(e)

                        window.open("/search/bookname/"+Search);
                    }}>
                        <Link className="NavbarLink" href = "http://localhost:3000/search/bookname/default">
                        <SearchIcon id="SearchIcon"/>
                        </Link>
                        <input className="SearchBar" placeholder="ค้นหาหนังสือ" value={Search} onChange={e => { setSearch(e.target.value)
                            // fetcher("/api/search/"+From+"/"+Search)
                        }} />
                    </form>
                </div>
            </div>

    );
}
export default Navbar;