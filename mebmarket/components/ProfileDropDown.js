import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { signIn, signOut, useSession } from "next-auth/react";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";


export default function MenuListComposition({ username, clientSession }) {
    const { role } = clientSession;
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === "Escape") {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const handleSignOut = async (e) => {
        e.preventDefault();
        signOut({
            redirect: true,
        });
        setOpen(true);
    };
    return (
        <>
            <div
                className="Bigger-than-you-thought"
                ref={anchorRef}
                aria-controls={open ? "composition-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                {username}
            </div>
            <Popper
                className="Popper"
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === "bottom-start"
                                    ? "left top"
                                    : "left bottom",
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <Button
                                            className="dropdown-button"
                                            variant="contained"
                                            size="small"
                                        >
                                            <Link
                                                className="Link-flex-row"
                                                href="/library"
                                            >
                                                <LocalLibraryIcon/>
                                                <h5>ชั้นหนังสือ</h5>
                                            </Link>
                                        </Button>
                                    </MenuItem>
                                    {role != "admin" ? null : (
                                        <>
                                            <MenuItem
                                                className="MenuItems100"
                                                onClick={handleClose}
                                            >
                                                <Button
                                                    className="dropdown-button"
                                                    variant="contained"
                                                    size="small"
                                                >
                                                    <Link
                                                        className="Link-flex-row"
                                                        href="/admin"
                                                    >
                                                        <EditIcon />
                                                        <h5>จัดการหนังสือ</h5>
                                                    </Link>
                                                </Button>
                                            </MenuItem>
                                            <MenuItem
                                                className="MenuItems100"
                                                onClick={handleClose}
                                            >
                                                <Button
                                                    className="dropdown-button"
                                                    variant="contained"
                                                    size="small"
                                                >
                                                    <Link
                                                        className="Link-flex-row"
                                                        href="/addbook"
                                                    >
                                                        <AddCircleOutlineIcon />
                                                        <h5>เพิ่มหนังสือ</h5>
                                                    </Link>
                                                </Button>
                                            </MenuItem>
                                        </>
                                    )}
                                    <MenuItem onClick={handleClose}>
                                        My account
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Button
                                            className="dropdown-button"
                                            variant="contained"
                                            size="small"
                                            onClick={handleSignOut}
                                        >
                                            <LogoutIcon />
                                            <h5>Sign out</h5>
                                        </Button>
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
}