import React from 'react';
import CustomizedRating from './CustomRating';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function RecentComment(props) {
    const { property } = props
    return (
        <>
            <div className="comment-container">
                <div className="content-comment">
                    {property.comment}
                    {/* for query comment from database */}
                </div>
                <div className="comment-buttom">
                    <div className="username-rate">
                        {property.username}
                        <CustomizedRating rate={property.rating||""} />
                    </div>
                    <div className="comment-profile">
                        <AccountCircleIcon fontSize='large' />
                    </div> 
                </div>
            </div>
        </>
    )
}
