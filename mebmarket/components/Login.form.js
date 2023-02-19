import style from '../styles/loginForm.module.css';
import Button from "@mui/material/Button";

function LoginPage(){
    return(
        <div>
            <Button onClick={()=>console.log('Show login form')}>Login</Button>
        </div>
    )
}
export default LoginPage;