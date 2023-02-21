import Button from "@mui/material/Button";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RegisterPage from "./Register.form";
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
      <Button
        className="NavbarButton"
        variant="contained"
        size="small"
        onClick={handleClick}
      >
        ล็อคอินเข้าสู่ระบบ/สมัครสมาชิก
      </Button>
      <div>{LoginStatus}</div>
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
              <Button className="GoDoit" variant="contained" size="small">Login</Button>
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


