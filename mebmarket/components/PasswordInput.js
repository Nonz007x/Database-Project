import * as React from 'react';
import { TextField } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
export default function PasswordInput() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClick=()=>{setShowPassword(!showPassword)}
    return (
        <div id='setPasswordElementPosition'>
            <TextField type={showPassword? "text":"password"} size="small" label="Password"/>
            <div>
                {!!!showPassword?<VisibilityIcon className="eye" onClick={handleClick}/>:<VisibilityOffIcon className="eye" onClick={handleClickPassword}/>}
            </div>
        </div>
    );

}
 