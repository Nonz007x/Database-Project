import { useState } from "react";
import Button from "@mui/material/Button";
import LoginPage from "./Login.form";

function Navbar() {
    const picUrl = "https://cdn.realsport101.com/images/ncavvykf/epicstream/642414748a7c2aa50203a5ee66307495fd2e54bf-1454x884.jpg?rect=0,32,1454,818&w=700&h=394&dpr=2";
    const [Search, setSearch] = useState("");
    return (
        <div className="BG">
            <div id="left">
                <LoginPage/>
            </div>
            <div id="midle">
                <img id="logo" src={picUrl} />
            </div>
                <div id="right">
                    <input value={Search} onChange={e => { setSearch(e.target.value) }} />
                </div>
            </div>

    );
}
export default Navbar;