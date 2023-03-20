import { Card } from "@mui/material";
import {CardContent} from "@mui/material";

export default function UserEdit(props) {
    const { property } = props;
    return (
        <div>
            <Card sx={{ height: 100 }} className="cardbox">
                <CardContent>
                    {/* <MenuBookIcon className="dashboard-icon" /> */}
                    <h1>{property.username}</h1>
                    
                </CardContent>
                <div className="dashboard-text">
                    <h4>จำนวนหนังสือทั้งหมด</h4>
                    {/* <h3>{BookCount}</h3> */}
                </div>
            </Card>
        </div>
    );
}
