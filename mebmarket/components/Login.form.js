import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RegisterPage from "./Register.form";
import { fetcher } from "@/pages/api/fetcher";
import { Login, Password } from "@mui/icons-material";
function LoginPage() {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const handleClick = () => {
    if(LoginStatus === "ล็อคอินเข้าสู่ระบบ/สมัครสมาชิก"){
      setIsLoginFormVisible(!isLoginFormVisible);
    }

  };
  const [showPassword, setShowPassword] = useState(false);
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleClickPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if(UserName === '' || password === ''){
      alert("กรุณากรอกข้อมูลให้ครบ")
      return;
    }

    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        username: UserName,
        password: password,
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.length === 0) {
        alert("username หรือ รหัสผ่านผิด")
      } else {
        alert("ล็อกอินสำเร็จ ยินดีต้อนรับ คุณ " + data[0].username)
        setLoginStatus("ผู้ใช้ : " + data[0].username)
        setIsLoginFormVisible(false)
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  
  const [LoginStatus,setLoginStatus] = useState("ล็อคอินเข้าสู่ระบบ/สมัครสมาชิก");
// todo: เปลี่ยนปุ่มล็อกอินเป็นปุ่ม profile**
  return (
    <div>
      <div className="Flexrow">
      <Button
        className="NavbarButton"
        variant="contained"
        size="small"
        onClick={handleClick}
      >                 
        {LoginStatus}
      </Button>
      </div>
      {isLoginFormVisible && 1 ? ( // <---- Why && 1 
        <div div id="TransparentBg">
          <div id="GotoMiddleOfTheScreen">
            <div id="CloseLogin">
              <CloseIcon  onClick={handleClick} />    
            </div>
              <h2 id="HeadLogin">Login</h2>
          <form onSubmit={handleFormSubmit}>
            <div id="UsernameZone">
            <TextField className="TextField"
              type="text"
              size="small"
              label="Username"
              value={UserName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            </div>
            <div id="PasswordZone">
                <TextField className="TextField" 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  size="small"
                  label="Password"
                />
                {!showPassword ? (
                <VisibilityIcon className="eye" onClick={handleClickPassword} />
              ) : (
                <VisibilityOffIcon
                  className="eye"
                  onClick={handleClickPassword}
                />
              )}
            </div>
            <div className="LoginButtonZone">
              <Button className="GoDoit" variant="contained" size="small"type="submit">Login</Button>
              <RegisterPage className="PleaseGoToCenter" />
            </div>
          </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default LoginPage;
