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

function LoginPage(props) {
    const { style } = props;
    const { data: clientSession, status } = useSession();
    const loading = status === "loading";
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [open, setOpen] = useState(false);
    const [userData, setUserData] = useState({
        username: null,
        password: null,
    });

    const handleClick = () => {
        if (!clientSession) {
            setIsLoginFormVisible(true);
        }
        if (clientSession) {
            console.log(clientSession);
        }
    };

    const handlePopupClose = () => {
        setIsLoginFormVisible(false)
    }

    const handleClickPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        if (
            (userData.password ?? "") !== "" &&
            (userData.username ?? "") !== ""
        ) {
            console.log("username is :", userData.username);
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

    const handleSignOut = async (e) => {
        e.preventDefault();
        signOut({
            redirect: true,
        });
        setOpen(true);
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
        } else {
            return clientSession.user.name;
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
                {!loading && (
                    <Button
                        className={getButtonClassName()}
                        variant="contained"
                        size="small"
                        onClick={handleClick}
                    >
                        {getButtonLabel()}
                    </Button>
                )}

                {clientSession && (
                    <>
                        {clientSession.role !== 'admin'
                            ? null
                            :
                            <>
                                <Link href="/admin"><Button size="small" variant="contained" className="login-register-button">จัดการหนังสือ</Button></Link>
                                <Link href="/addbook"><Button size="small" variant="contained" className="login-register-button">เพิ่มหนังสือ</Button></Link>
                            </>
                        }
                    </>
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

            {(isLoginFormVisible) ? (
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
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
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
