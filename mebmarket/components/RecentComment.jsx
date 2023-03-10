import React from 'react';
import CustomizedRating from './CustomRating';
import { useState, useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function RecentComment(props) {
    const { property } = props
    const [date, setDate] = useState('');

    const timeUnits = [
        { unit: 'ปี', value: 31557600000 },
        { unit: 'เดือน', value: 2629800000 },
        { unit: 'วัน', value: 86400000 },
        { unit: 'ชั่วโมง', value: 3600000 },
        { unit: 'นาที', value: 60000 },
        { unit: 'วินาที', value: 1000 },
    ];

    useEffect(() => {
        const today = new Date();
        today.setHours(today.getHours())
        const dateTime = new Date(property.time);
        const millisecs = today - dateTime.getTime();

        let i = 0;
        while (i < timeUnits.length && millisecs < timeUnits[i].value) {
            i++;
        }

        const { unit, value } = timeUnits[i];
        const distance = Math.floor(millisecs / value);
        setDate(`${distance} ${unit}`);
    }, []);

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
