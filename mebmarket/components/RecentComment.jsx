import React from 'react';
import CustomizedRating from './CustomRating';
import { useState, useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from '@mui/material';
export default function RecentComment(props) {
    const { property } = props
    const [date, setDate] = useState('');
    console.log(property)
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
        today.setHours(today.getHours());
        const dateTime = new Date(property.time);
        const millisecs = today - dateTime.getTime();

        let i = 0;
        while (i < timeUnits.length && millisecs < timeUnits[i].value) {
            i++;
        }

        const unitValue = timeUnits[i];
        if (unitValue) {
            const { unit, value } = unitValue;
            const distance = Math.floor(millisecs / value);
            const newDate = `${distance} ${unit}`;
            if (newDate !== date) {
                setDate(newDate);
            }
        } else {
            setDate("0 วินาที")
        }
    }, [property.time]);

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
                        <CustomizedRating rate={(property.rating)} />
                    </div>
                    <div className="comment-profile">
                        {/* <AccountCircleIcon fontSize='large' /> */}
                        <Avatar alt={property.username} src={property.avatar || ""} />
                    </div>
                </div>
            </div>
        </>
    )
}
