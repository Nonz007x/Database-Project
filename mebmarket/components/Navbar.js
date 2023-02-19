import { useState } from "react";
import LoginPage from "./Login.form";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Navbar() {
    const picUrl = "https://www.mebmarket.com/web/dist/assets/images/logo_store.png?1687";
    const [Search, setSearch] = useState("");
    return (
        <div className="BG">
            <div id="left">
                <LoginPage/>
            </div>
            <div id="midle">
                <a href="localhost:3000">
                    <img id="logo" src={picUrl} />
                </a>
            </div>
                <div id="right">
                    <FavoriteIcon/>
                    <ShoppingCartIcon id="addShoppingCartIconMargin"/>
                    <form>
                        <SearchIcon id="SearchIcon"/>
                        <input id="SearchBar" placeholder="ค้นหาหนังสือ" value={Search} onChange={e => { setSearch(e.target.value) }} />
                    </form>
                </div>
            </div>

    );
}
export default Navbar;