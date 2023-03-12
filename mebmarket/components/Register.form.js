import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { alertClasses, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ConstructionOutlined } from "@mui/icons-material";


export default function RegisterPage() {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const handleClick = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showrePassword, setShowrePassword] = useState(false);
  const [UserName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setrePassword] = useState("");
  const [acceptTnC, setacceptTnC] = useState(false);

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleClickPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickrePassword = () => {
    setShowrePassword(!showrePassword);
  };

  const handleCheck = (e) => {
    setacceptTnC(e.target.checked)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (usernameError || emailError || passwordError) {
      return;
    }

    if (!acceptTnC) {
      alert('Please accept the terms and conditions');
      return;
    }
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username: UserName,
          password: password,
          email: email,
          repassword: repassword,
          acceptTnC: acceptTnC,
        })
      });

      const data = await response.json();
      JSON.stringify(data);

      if (response.ok) {
        alert("สมัครสมาชิกสำเร็จ");
      } else {
        if (data === 0) {
          setUsernameError('Username นี้ถูกใช้งานแล้ว');
          return;
        } else if (data === 1) {
          setEmailError('Email นี้ถูกใช้งานแล้ว');
          return;
        } else {
          alert(data);
          return
        }
      }
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    const containRestricted = /\W/.test(UserName);
    if (UserName && containRestricted) {
      setUsernameError("Username must not contain special characters");
    } else {
      setUsernameError("");
    }
  }, [UserName]);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email)
    if (!isValidEmail && email) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  }, [email])

  useEffect(() => {
    if (password !== repassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError('')
    }
  }, [password, repassword])

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
        <div id="TransparentBg">
          <div id="GotoMiddleOfTheScreen">
            <div id="CloseLogin">
              <CloseIcon onClick={handleClick} />
            </div>
            <h2 id="HeadLogin">Register</h2>
            <form onSubmit={handleFormSubmit}>
              <div id="UsernameZone">
                <TextField className="TextField"
                  required
                  type="text"
                  size="small"
                  label="User name"
                  value={UserName}
                  onChange={(e) => { setUserName(e.target.value) }}
                  error={Boolean(usernameError)}
                  helperText={usernameError}
                />
              </div>
              <div>
                <TextField className="TextField"
                  required
                  size="small"
                  label="Email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value) }}
                  error={Boolean(emailError)}
                  helperText={emailError}
                />
              </div>
              <div id="PasswordZone">
                <TextField className="TextField"
                  required
                  type={showPassword ? "text" : "password"}
                  size="small"
                  label="Password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value) }}
                  error={Boolean(passwordError)}
                  helperText={passwordError}
                />
                {!!!showPassword ? (
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
                  required
                  type={showrePassword ? "text" : "password"}
                  value={repassword}
                  size="small"
                  label="Retype-Password"
                  onChange={(e) => { setrePassword(e.target.value); }}
                  error={Boolean(passwordError)}
                  helperText={passwordError}
                />
                {!!!showrePassword ? (
                  <VisibilityIcon className="eye" onClick={handleClickrePassword} />
                ) : (
                  <VisibilityOffIcon
                    className="eye"
                    onClick={handleClickrePassword}
                  />
                )}
              </div>
              <div>
                <input type="checkbox" id="Accept" value={acceptTnC} onChange={handleCheck} />
                <label htmlFor="Accept">{" I accept term and condition"}</label>
              </div>
              <div className="LoginButtonZone">
                <Button className="GoDoit" variant="contained" size="small" type="submit">Register</Button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}