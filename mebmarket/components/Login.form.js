import Button from "@mui/material/Button";
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
function LoginPage(){
    const [isLoginFormVisible,setIsLoginFormVisible]=useState(false);
    const handleClick=()=>{setIsLoginFormVisible(!isLoginFormVisible)}
    const [showPassword, setShowPassword] = useState(false);
    const [UserName,setUserName] = useState('');
    const [password,setPassword] = useState("");
    const handleClickPassword=()=>{setShowPassword(!showPassword)}
    return(
        <div>
            <Button className="NavbarButton" variant="contained" size="small" onClick={handleClick}>ล็อคอินเข้าสู่ระบบ/สมัครสมาชิก</Button>
            {isLoginFormVisible && 1?
                <div div id='TransparentBg'>
                    <div id='GotoMiddleOfTheScreen'>
                        Login
                        <CloseIcon onClick={handleClick}/>
                        <div id="loginBar">
                            <TextField type="text" size="small" label="User Name" value={UserName} onChange={(e)=>{setUserName(e.target.value)}}/>
                        </div>
                        <div id='setPasswordElementPosition'>
                            <TextField type={showPassword? "text":"password"} value={password} onChange={(e)=>{setPassword(e.target.value)}} size="small" label="Password"/>
                                <div>
                                    {!showPassword?<VisibilityIcon className="eye" onClick={handleClickPassword}/>:<VisibilityOffIcon className="eye" onClick={handleClickPassword}/>}
                                </div>
                        </div>
                    </div>
                </div>
        :null}
                
            
        </div>
    )
}
export default LoginPage;