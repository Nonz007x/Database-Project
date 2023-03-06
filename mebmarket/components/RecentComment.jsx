import React from 'react';
import CustomizedRating from './CustomRating';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function RecentComment() {
    return (
        <>
            <div className="comment-container">
                <div className="content-comment">
                    test
                    {/* for query comment from database */}
                </div>
                <div className="comment-buttom">
                    <div className="username-rate">
                        username
                        <CustomizedRating />
                    </div>
                    <div className="comment-profile">
                        <AccountCircleIcon fontSize='large'/>
                    </div>
                </div>
            </div>
        </>
    )
}
