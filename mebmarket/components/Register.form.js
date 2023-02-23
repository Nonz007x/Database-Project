import Button from "@mui/material/Button";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";


export default function RegisterPage() {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const handleClick = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showrePassword, setShowrePassword] = useState(false);
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setrePassword] = useState("");
  const handleClickPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickrePassword = () => {
    setShowrePassword(!showrePassword);
  };

  const [acceptTnC,setacceptTnC] = useState(false);
  const handleCheck = (e) =>{
    setacceptTnC(e.target.checked)
  }

  return (
    <>
      <Button
        className="RegisterOpenButton"
        variant="contained"
        size="small"
        onClick={handleClick}
      >
        สมัครสมาชิก
      </Button>
      {isLoginFormVisible && 1 ? (
        <div div id="TransparentBg">
          <div id="GotoMiddleOfTheScreen">
            <div id="CloseLogin">
              <CloseIcon  onClick={handleClick} />    
            </div>
              <h2 id="HeadLogin">Register</h2>
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
                <TextField className="TextField" Id="PasswordField" 
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
            <div id="PasswordZone">
                <TextField className="TextField"  
                  type={showrePassword ? "text" : "password"}
                  value={repassword}
                  onChange={(e) => {
                    setrePassword(e.target.value);
                  }}
                  size="small"
                  label="Retype-Password"
                />
                {!showrePassword ? (
                <VisibilityIcon className="eye" onClick={handleClickrePassword} />
              ) : (
                <VisibilityOffIcon
                  className="eye"
                  onClick={handleClickrePassword}
                />
              )}
            </div>
            <div>
              <input type="checkbox" id="Accept" value={acceptTnC} onChange={handleCheck}/>
              <label for="Accept">{" I accept term and condition"}</label>
            </div>
            <div className="LoginButtonZone">
              <Button className="GoDoit" variant="contained" size="small" onClick={()=>{
                if(password!==repassword){
                  alert("รหัสผ่านไม่ตรงกัน")
                }
                else if(!acceptTnC){
                  alert("Please accept term and condition")
                }
                else{
                  fetch('/api/insert', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams({
                        username:UserName,
                        password:password,
                    })
                }).then(e => e.json()).then(data => {
                  alert(JSON.stringify(data))
                })}
              }}>Register</Button>
            </div>
          </div>
          </div>
        </div>
      ) : null}
    </>
  );
}


