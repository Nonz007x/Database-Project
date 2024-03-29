import { getSession, useSession } from "next-auth/react";
import { Avatar } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { Collapse } from "@mui/material";
import { TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import Head from "next/head";
import DeleteIcon from "@mui/icons-material/Delete";
import { signOut } from "next-auth/react";

export default function ProfileEditPage({ sessionData }) {

    const AvatarUpdate = async () => {
        const response = await fetch("/api/profile/avatarUpdate", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                avatarUrl: imgLink,
                username: sessionData.user.name,
            }),
        });
        console.log(response);
    };

    const DelAccount = async () => {
        const response = await fetch("/api/user/delete", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                username: sessionData.user.name,
            }),
        });
        signOut({
            redirect: true,
        });
    };

    const [avatarPic, setAvatarPic] = useState(sessionData.avatar);
    const [editTextFieldOpen, setEditTextFieldOpen] = useState(false);
    const [imgLink, setImgLink] = useState("");
    const handlePicUpload = async (e) => {
        e.preventDefault();
        AvatarUpdate();
        await setAvatarPic(imgLink);
        alert("กรุณาเข้าสู่ระบบใหม่อีกครั้งเพื่อเห็นการเปลี่ยนแปลง")
    };

    return (
        <>
            <Head>
                <title>meb: เพิ่มหนังสือ</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="https://www.mebmarket.com/web/assets/images/ico/favicon-32x32.png"
                />
            </Head>

            <div className="profile-edit-wrap">
                <div className="avatar-wrap">
                    <Avatar
                        // alt={sessionData.user.name}
                        className="profile-edit-avatar"
                        sx={{ width: 360, height: 360 }}
                        src={avatarPic.toString()}
                    />
                    <IconButton
                        onClick={() => {
                            setEditTextFieldOpen(!editTextFieldOpen);
                        }}
                        className="edit-button"
                        aria-label="Edit profile"
                    >
                        {editTextFieldOpen ? <CloseIcon /> : <EditIcon />}
                    </IconButton>
                </div>
                <Collapse in={editTextFieldOpen}>
                    <form
                        className="profile-input-area"
                        onSubmit={handlePicUpload}
                    >
                        <TextField
                            label="url"
                            value={imgLink}
                            onChange={(e) => setImgLink(e.target.value)}
                        />
                        <Button
                            className="profile-input-area-submit"
                            variant="contained"
                            type="submit"
                        >
                            ตกลง
                        </Button>
                    </form>
                </Collapse>
                <h2>ข้อมูลผู้ใช้</h2>
                <h4>username : {sessionData.user.name}</h4>
                <h4>email : {sessionData.user.email}</h4>
                <h4>role : {sessionData.role}</h4>
                <Button
                    className="delete-user"
                    onClick={DelAccount}
                    variant="contained"
                >
                    <DeleteIcon />
                    ลบผู้ใช้
                </Button>
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    const res = await getSession(context);
    const sessionData = res;
    if (res === "" || res === null) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        }
    }
    return { props: { sessionData } };
}