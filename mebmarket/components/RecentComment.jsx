import React from 'react';
import CustomizedRating from './CustomRating';
import { useState, useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function RecentComment(props) {
    const { property } = props
    const [date, setDate] = useState('');
    
    useEffect(() => {
        const today = new Date();
        today.setHours(today.getHours())
        const dateTime = new Date(property.time);
        const millisecs = today - dateTime.getTime();
        const distanceInDays = Math.floor(millisecs / (1000 * 60 * 60 * 24));
        const distanceInMonths = Math.floor(distanceInDays / 30);
        const distanceInYears = Math.floor(distanceInMonths / 12);
        
        if (millisecs < 60000) {
            const distanceInSeconds = Math.floor((millisecs % (1000 * 60)) / 1000);
            setDate(`${distanceInSeconds} วินาที`)
        }
        else if (millisecs < 3600000) {
            const distanceInMinutes = Math.floor((millisecs % (1000 * 60 * 60)) / (1000 * 60));
            setDate(`${distanceInMinutes} นาที`)
        }
        else if (millisecs < 86400000) {
            const distanceInHours = Math.floor((millisecs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            setDate(`${distanceInHours} ชั่วโมง`)
        }
        else if (millisecs < 604800016.56) {
            setDate(`${distanceInDays} วัน`)
        }
        else if (millisecs < 31557600000) {
            setDate(`${distanceInMonths} เดือน`)
        }
        else {
            setDate(`${distanceInYears} ปี`)
        }
    }, [])

    return (
        <>
            <div className="comment-container">
                <div className="content-comment">
                    {property.comment}
                    {/* for query comment from database */}
                </div>
                <div className="comment-buttom">
                    <div className="username-rate">
                        <p>โพสต์เมื่อ {date} ที่แล้ว</p>
                        {property.username}
                        <CustomizedRating rate={Number(property.rating)} />
                    </div>
                    <div className="comment-profile">
                        <AccountCircleIcon fontSize='large' />
                    </div>
                </div>
            </div>
        </>
    )
}
