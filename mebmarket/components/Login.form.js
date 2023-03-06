import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import RegisterPage from "./Register.form";
import CloseIcon from "@mui/icons-material/Close";
import { signIn, signOut, useSession } from "next-auth/react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function LoginPage() {
  const { data: clientSession, status } = useSession()
  const loading = status === "loading"
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const handleClick = () => {
    if (!clientSession) {
      setIsLoginFormVisible(!isLoginFormVisible);
    }
    if (clientSession) {
      console.log(clientSession)
      alert(clientSession.role)
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

  const handleSignIn = async (e) => {
    e.preventDefault();
    signIn();
    // const result = await signIn('credentials',{
    //   username: UserName,
    //   password: password,
    //   redirect: false
    // });

    // if (result?.error) {
    //   setUsernameError(result.error);
    //   return;
    // }
  }

  const handleSignOut = async (e) => {
    e.preventDefault();
    signOut({
      redirect: false,
    });
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await signIn('credentials', {
        username: UserName,
        password: password,
        redirect: false
      });

      if (result.error) {
        setUsernameError(result.error);
      } else {
        setUsernameError("");
        setIsLoginFormVisible(false);
      }
    } catch (error) {
      console.error('Error:', error);
    };
  }

  return (
    <>
      <div className="Flexrow">
        {!loading && (
          <Button
            className="login-register-button"
            variant="contained"
            size="small"
            onClick={handleClick}
          >
            {!clientSession ? ('ล็อคอินเข้าสู่ระบบ / สมัครสมาชิก') : clientSession.user.name}
          </Button>
        )}
        {clientSession && (
          <Button
            className="login-register-button"
            variant="contained"
            size="small"
            onClick={handleSignOut}
          >
            Sign out
          </Button>
        )}
      </div>

      {isLoginFormVisible ? (
        <div id="TransparentBg">
          <div id="GotoMiddleOfTheScreen">
            <div id="CloseLogin">
              <CloseIcon onClick={handleClick} />
            </div>
            <h2 id="HeadLogin">Login</h2>
            <div>
              <form onSubmit={handleSignIn}>
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
    </>
  );
}
export default LoginPage;