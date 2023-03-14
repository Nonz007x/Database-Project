import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import RegisterPage from "./Register.form";
import CloseIcon from "@mui/icons-material/Close";
import { signIn, signOut, useSession } from "next-auth/react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import Link from "next/link";
import ProfileDropDown from "./ProfileDropDown";
function LoginPage(props) {
    const { style } = props;
    const { data: clientSession, status } = useSession();
    const loading = status === "loading";
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [open, setOpen] = useState(false);
    const [SendClick, setSendClick] = useState("");

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    const handleClick = () => {
        if (!clientSession) {
            setIsLoginFormVisible(true);
        }
    };

    const handlePopupClose = () => {
        setIsLoginFormVisible(false);
    };

    const handleClickPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        if (
            (userData.password ?? "") !== "" &&
            (userData.username ?? "") !== ""
        ) {
            const result = await signIn("credentials", {
                name: userData.username,
                password: userData.password,
                redirect: false,
            });

            if (result?.error) {
                setUsernameError("ชื่อผู้ใช้งานหรือรหัสผ่านผิด");
                return;
            }
        } else {
            setUsernameError("โปรดกรอกข้อมูลให้ครบ");
            return;
        }

        setIsLoginFormVisible(false);
        setUserData("");
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    const getButtonLabel = () => {
        if (style === "favorite") {
            return <FavoriteIcon />;
        } else if (!clientSession) {
            return "ล็อคอินเข้าสู่ระบบ / สมัครสมาชิก";
        }
    };

    const getButtonClassName = () => {
        switch (style) {
            case "comment":
                return "login-register-button-comment";
            case "favorite":
                return "favoriteButton-navbar";
            default:
                return "login-register-button";
        }
    };

    return (
        <>
            <div className="Flexrow">
                {!loading &&
                    (!clientSession ? (
                        <Button
                            className={getButtonClassName()}
                            variant="contained"
                            size="small"
                            onClick={handleClick}
                        >
                            {getButtonLabel()}
                        </Button>
                    ) : (
                        <Button>
                            <ProfileDropDown
                                username={clientSession.user.name}
                                clientSession={clientSession}/>
                        </Button>
                    ))}
            </div>

            {isLoginFormVisible ? (
                <div id="TransparentBg">
                    <div id="GotoMiddleOfTheScreen">
                        <div id="CloseLogin">
                            <CloseIcon onClick={handlePopupClose} />
                        </div>
                        <h2 id="HeadLogin">Login</h2>
                        <div>
                            <form onSubmit={handleSignIn}>
                                <div id="UsernameZone">
                                    <TextField
                                        className="TextField"
                                        type="text"
                                        size="small"
                                        label="Username"
                                        value={userData?.username}
                                        onChange={(e) => {
                                            setUserData({
                                                ...userData,
                                                username: e.target.value,
                                            });
                                        }}
                                        error={Boolean(usernameError)}
                                        helperText={usernameError}
                                    />
                                </div>
                                <div id="PasswordZone">
                                    <TextField
                                        className="TextField"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        size="small"
                                        label="Password"
                                        value={userData?.password || ""}
                                        onChange={(e) => {
                                            setUserData({
                                                ...userData,
                                                password: e.target.value,
                                            });
                                        }}
                                        error={Boolean(passwordError)}
                                        helperText={passwordError}
                                    />
                                    {!showPassword ? (
                                        <VisibilityIcon
                                            className="eye"
                                            onClick={handleClickPassword}
                                        />
                                    ) : (
                                        <VisibilityOffIcon
                                            className="eye"
                                            onClick={handleClickPassword}
                                        />
                                    )}
                                </div>
                                <div className="LoginButtonZone">
                                    <Button
                                        className="GoDoit"
                                        variant="contained"
                                        size="small"
                                        type="submit"
                                    >
                                        Login
                                    </Button>
                                </div>
                            </form>
                            <RegisterPage className="PleaseGoToCenter" />
                        </div>
                    </div>
                </div>
            ) : null}
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert
                    variant="filled"
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    คุณได้ออกจากระบบ
                </Alert>
            </Snackbar>
        </>
    );
}
export default LoginPage;
