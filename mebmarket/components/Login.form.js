import style from '../styles/loginForm.module.css';
import Button from "@mui/material/Button";
import PasswordInput from './PasswordInput';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
function LoginPage(){
    const [isLoginFormVisible,setIsLoginFormVisible]=useState(false);
    const handleClick=()=>{setIsLoginFormVisible(!isLoginFormVisible)}
    const [showPassword, setShowPassword] = useState(false);
    const [password,setPassword] = useState("");
    const handleClickPassword=()=>{setShowPassword(!showPassword)}
    return(
        <div>
            <Button variant="contained" size="small" onClick={handleClick}>ล็อคอินเข้าสู่ระบบ/สมัครสมาชิก</Button>
            {isLoginFormVisible && 1?
                <div div id='TransparentBg'>
                    <div id='GotoMiddleOfTheScreen'>
                        Login
                        <CloseIcon onClick={handleClick}/>
                        <div id='setPasswordElementPosition'>
                            <TextField type={showPassword? "text":"password"} value={password} onChange={(e)=>{setPassword(e.target.value)}} size="small" label="Password"/>
                                <div>
                                    {!showPassword?<VisibilityIcon className="eye" onClick={handleClick}/>:<VisibilityOffIcon className="eye" onClick={handleClickPassword}/>}
                                </div>
                        </div>
                    </div>
                </div>
        :null}
                
            
        </div>
    )
}
export default LoginPage;