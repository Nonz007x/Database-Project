import Button from "@mui/material/Button";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function RegisterPage() {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
  const handleClick = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };
  const [showPassword, setShowPassword] = useState(false);
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleClickPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <Button
        className="NavbarButton"
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
                <TextField className="TextField" id="PasswordField" 
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
                <TextField className="TextField" id="PasswordField" 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  size="small"
                  label="Retype-Password"
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
            <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>plowifa</div>
            <Button variant="contained" size="small">Register</Button>
          </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}


