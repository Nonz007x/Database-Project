import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CommentIcon from '@mui/icons-material/Comment';
import { fetcher } from './api/fetcher';

export async function getStaticProps(context) {
    const BookCount = await fetcher("http://localhost:3000/api/getcount");
    const UsersCount = await fetcher("http://localhost:3000/api/getcountuser")
    return {
        props: { BookCount, UsersCount }, // will be passed to the page component as props
    }
}


export default function admindashboard({ BookCount, UsersCount }) {
    console.log(UsersCount)
    console.log(BookCount)
    return (
        <>
            <div className="dashboard-container">
                <Card sx={{ height: 250, width: 450 }} className="cardbox">
                    <CardContent>
                        <MenuBookIcon className='dashboard-icon' />
                    </CardContent>
                    <div className="dashboard-text">
                        <h2>หนังสือ</h2>
                        <h4>จำนวนหนังสือทั้งหมด</h4>
                        <h3>{BookCount}</h3>
                    </div>
                </Card>
                <Card sx={{ height: 250, width: 450 }} className="cardbox">
                    <CardContent>
                        <MenuBookIcon className='dashboard-icon' />
                    </CardContent>
                    <div className="dashboard-text">
                        <h2>User</h2>
                        <h4>จำนวน User ทั้งหมด</h4>
                        <h3>{UsersCount}</h3>
                    </div>
                </Card>
                <Card sx={{ height: 250, width: 1000 }} className="commentbox">
                    <CardContent className="dashboard-comment-header">
                        <CommentIcon fontSize='large' className='commentbox-icon' />
                        <h2>คอมเมนต์ล่าสุด</h2>
                    </CardContent>
                    <div className="dashboard-text">
                        mapcomment
                    </div>
                </Card>
            </div>
        </>
    )
}
