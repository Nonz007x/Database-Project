import style from '../styles/loginForm.module.css';
import Button from "@mui/material/Button";
import PasswordInput from './PasswordInput';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
function LoginPage(){
    const [isLoginFormVisible,setIsLoginFormVisible]=useState(false);
    const handleClick=()=>{setIsLoginFormVisible(!isLoginFormVisible)}
    return(
        <div>
            <Button variant="contained" size="small" onClick={handleClick}>ล็อคอินเข้าสู่ระบบ/สมัครสมาชิก</Button>
            {isLoginFormVisible && 1?
                <div div id='TransparentBg'>
                    <div id='GotoMiddleOfTheScreen'>
                        Login
                        <CloseIcon onClick={handleClick}/>
                        <PasswordInput/>
                    </div>
                </div>
        :null}
                
            
        </div>
    )
}
export default LoginPage;