import { Button, Card, InputLabel } from "@mui/material";
import { CardContent } from "@mui/material";
import { Avatar } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AutorenewIcon from "@mui/icons-material/Autorenew";

export default function UserEdit(props) {
    const { property } = props;
    const [role, setRole] = useState(property.role);
    const [active, setActive] = useState(property.valid);
    const DelAccount = async () => {
        const response = await fetch("/api/user/delete", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                username: property.username,
            }),
        });
        setActive(!active);
    };
    const reactiveAccount = async () => {
        const response = await fetch("/api/user/reactiveUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                username: property.username,
            }),
        });
        setActive(!active);
    };

    const handleChange = async (event) => {
        console.log(event.target.value);
        const response = await fetch("/api/user/roleChange", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                username: property.username,
                role: event.target.value,
            }),
        });
        console.log(response);
        setRole(event.target.value);
    };
    return (
        <div>
            <div className="user-edit-card-bg">
                <div className="user-edit-flex-wrap">
                    <Avatar alt={property.name} src={property.avatar} />
                    <div className="user-edit-text">
                        {active ? (
                            <h3>
                                username :{" "}
                                <span className="active-text">
                                    {property.username}
                                </span>
                            </h3>
                        ) : (
                            <h3>
                                username :{" "}
                                <span className="deactive-text">
                                    {property.username}
                                </span>
                            </h3>
                        )}

                        <h5>email : {property.email}</h5>
                        <h5>
                            name : {property.firstname} {property.lastname}
                        </h5>
                        {active ? (
                            <h5>
                                status :
                                <span className="active-text"> active</span>
                            </h5>
                        ) : (
                            <h5>
                                status :
                                <span className="deactive-text"> deactive</span>
                            </h5>
                        )}
                    </div>
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
                <div>
                    {active ? (
                        <Button
                            size="large"
                            className="delete-user"
                            variant="contained"
                            onClick={DelAccount}
                        >
                            <DeleteIcon />
                        </Button>
                    ) : (
                        <Button
                            size="large"
                            className="reactive-user"
                            variant="contained"
                            onClick={reactiveAccount}
                        >
                            <AutorenewIcon />
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
