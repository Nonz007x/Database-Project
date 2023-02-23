import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RegisterPage from "./Register.form";
import { fetcher } from "@/pages/api/fetcher";
import { Password } from "@mui/icons-material";

function LoginPage() {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const handleClick = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };
  const [showPassword, setShowPassword] = useState(false);
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleClickPassword = () => {
    setShowPassword(!showPassword);
  };
  const [LoginStatus,setLoginStatus] = useState(null);
 
  return (
    <div>
      <div className="Flexrow">
      <Button
        className="NavbarButton"
        variant="contained"
        size="small"
        onClick={handleClick}
      >
        ล็อคอินเข้าสู่ระบบ/สมัครสมาชิก
      </Button>
      <h2>{LoginStatus}</h2>
      </div>
      {isLoginFormVisible && 1 ? (
        <div div id="TransparentBg">
          <div id="GotoMiddleOfTheScreen">
            <div id="CloseLogin">
              <CloseIcon  onClick={handleClick} />    
            </div>
              <h2 id="HeadLogin">Login</h2>
          <div id="loginBar">
            <div id="UsernameZone">
            <TextField className="TextField"
              type="text"
              size="small"
              label="User Name"
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
              <Button className="GoDoit" variant="contained" size="small"
                onClick={()=>{
                  fetcher("/api/user/"+UserName.toString()).then((e)=>{
                    const obj =e;
                    console.log(obj)
                    if (e.length === 0) {
                      alert("ไม่มีข้อมูล")
                    }
                    else{
                      console.log("password",password)
                    if(  !!(UserName===e[0].username) && !!(password ==e[0].password)){
                      alert("ล็อตอินสำเร็จ ยินดีต้อนรับ คุณ "+e[0].username.toString())
                      setLoginStatus("ผู้ใช้ : "+e[0].username.toString())
                    }
                    else{
                      alert("รหัสผ่านผิด");
                    }
                    }
                  })}}
              >Login</Button>
              <RegisterPage className="PleaseGoToCenter" />
            </div>
          </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default LoginPage;


