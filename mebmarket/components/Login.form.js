import style from '../styles/loginForm.module.css';
import Button from "@mui/material/Button";
import { useState } from 'react';
function LoginPage(){
    const [isLoginFormVisible,setIsLoginFormVisible]=useState(false);
    return(
        <div>
            <Button variant="contained" size="small" onClick={() => setIsLoginFormVisible(true)}>ล็อคอินเข้าสู่ระบบ/สมัครสมาชิก</Button>
            {isLoginFormVisible && (
                <div className={style.overlay}>
                    <div className={style.loginForm}>
                        <h2>Login</h2>
                        <form>
                            <input type="text" className={style.loginForm_input} placeholder=""></input><br></br>
                            <input type="password" className={style.loginForm_input} placeholder=""></input>
                            <Button type='submit' className={style.loginForm_button}>Login</Button>
                        </form>
                        <Button onClick={() => setIsLoginFormVisible(false)}>Close</Button>
                        </div></div>
            )}
        </div>
    )
}
export default LoginPage;