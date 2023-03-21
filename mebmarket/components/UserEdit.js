import { Card, InputLabel } from "@mui/material";
import { CardContent } from "@mui/material";
import { Avatar } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/material";
export default function UserEdit(props) {
    const { property } = props;
    const handleChange = (event) => {
        setRole(event.target.value);
    };
    const [role, setRole] = useState(property.role);
    return (
        <div>
            <div className="user-edit-card-bg">
                <div className="user-edit-flex-wrap">
                    <Avatar src={property.avatar} />
                    <h3>{property.username}</h3>
                    {property.role}
                </div>
                <Box sx={{ width: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel>Role</InputLabel>
                        <Select
                            label="Role"
                            value={role || ""}
                            onChange={handleChange}
                        >
                            <MenuItem value={"admin"}>Admin</MenuItem>
                            <MenuItem value={"user"}>User</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            {/* <Card sx={{ height: 100 }} className="cardbox">
                <CardContent>
                    <h1>{property.username}</h1>
                    
                </CardContent>
                <div className="dashboard-text">
                    <h4>จำนวนหนังสือทั้งหมด</h4>
                </div>
            </Card> */}
        </div>
    );
}
