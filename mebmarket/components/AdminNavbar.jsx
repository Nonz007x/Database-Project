import Link from 'next/link'
import { Button } from "@mui/material";
import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export default function AdminNavbar() {
    return (
        <>
            <div className="navbar-container">
                <div className="main-navbar">
                    <div id="nav-left">
                        <h3>test</h3>
                        {/* for show admin username */}
                    </div>
                    <div id="nav-right">
                        <Link href="./admin" className="admin-nav-button">
                            <Button variant="contained" className="admin-button">
                                <EditIcon className="admin-icon" fontSize="large"/>
                                Admin
                            </Button>
                        </Link>
                        <Link href="./addbook" className="admin-nav-button">
                            <Button variant="contained" className="admin-button">
                                <AutoStoriesIcon className="admin-icon" fontSize="large"/>
                                เพิ่มหนังสือ
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
