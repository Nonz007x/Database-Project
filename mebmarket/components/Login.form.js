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
    if (LoginStatus === "ล็อคอินเข้าสู่ระบบ/สมัครสมาชิก") {
      setIsLoginFormVisible(!isLoginFormVisible);
    }

  };
  const [showPassword, setShowPassword] = useState(false);
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleClickPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (UserName === '') {
      setUsernameError("กรุณากรอก username");
      if (password === '') {
        setPasswordError("กรุณากรอก password");
        return;
      }
    } else if (password === '') {
      setPasswordError("กรุณากรอก password");
      if (UserName === '') {
        setUsernameError("กรุณากรอก username");
        return;
      }
    } else {
      setUsernameError("");
      setPasswordError("");
    }
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username: UserName,
          password: password,
        })
      })
      const data = await response.json();
      JSON.stringify(data);

      if (data.length === 0) {
        alert("username หรือ รหัสผ่านผิด")
      } else {
        alert("ล็อกอินสำเร็จ ยินดีต้อนรับ คุณ " + data[0].username)
        setLoginStatus("ผู้ใช้ : " + data[0].username)
        setIsLoginFormVisible(false)
      }
    } catch (error) {
      console.error('Error:', error);
    };
  }

  const [LoginStatus, setLoginStatus] = useState("ล็อคอินเข้าสู่ระบบ/สมัครสมาชิก");

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
      {isLoginFormVisible ? (
        <div id="TransparentBg">
          <div id="GotoMiddleOfTheScreen">
            <div id="CloseLogin">
              <CloseIcon onClick={handleClick} />
            </div>
            <h2 id="HeadLogin">Login</h2>
            <div>
            <form onSubmit={handleFormSubmit}>
              <div id="UsernameZone">
                <TextField className="TextField"
                  type="text"
                  size="small"
                  label="Username"
                  value={UserName}
                  onChange={(e) => { setUserName(e.target.value) }}
                  error={Boolean(usernameError)}
                  helperText={usernameError}
                />
              </div>
              <div id="PasswordZone">
                <TextField className="TextField"
                  type={showPassword ? "text" : "password"}
                  size="small"
                  label="Password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value) }}
                  error={Boolean(passwordError)}
                  helperText={passwordError}
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
                <Button className="GoDoit" variant="contained" size="small" type="submit">Login</Button>
              </div>
            </form>
            <RegisterPage className="PleaseGoToCenter" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default LoginPage;
