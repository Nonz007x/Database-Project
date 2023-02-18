import "./Navbar.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import { TextField } from "@mui/material";
import SearchIcon from '@mui/material';


function Navbar(){
    const picUrl = "https://cdn.realsport101.com/images/ncavvykf/epicstream/642414748a7c2aa50203a5ee66307495fd2e54bf-1454x884.jpg?rect=0,32,1454,818&w=700&h=394&dpr=2";
    const searchIcon = "https://i.pinimg.com/originals/7e/05/9f/7e059f83e86505871b4cbfcd1c966032.jpg";
    const [Search,setSearch]= useState("");
    return(
        <div className="BG">
            <div className="left">
                <Button  variant="contained" size="small">ล็อคอินเข้าระบบ/สมัครสมาชิก</Button>
            </div>
            <div className="middle">
                <img id="logo" src={picUrl} />
            </div>
            <div className="right">
                <form className="search">
                    <input id="img" type="image" src={searchIcon}/>
                    <TextField variant="outlined" label="Outlined" size="small"/>
                </form>
            </div>
        </div>

    );
}
export default Navbar;