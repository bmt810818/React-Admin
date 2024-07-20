// in src/MyLogoutButton.js
import * as React from 'react';
import { forwardRef } from 'react';
import { useLogout } from 'react-admin';
import MenuItem from '@mui/material/MenuItem';
import ExitIcon from '@mui/icons-material/PowerSettingsNew';

// It's important to pass the ref to allow Material UI to manage the keyboard navigation
const MyLogoutButton = forwardRef((props, ref) => {
    const logout = useLogout();
    const handleClick = () => logout();
    return (
        <MenuItem
            onClick={handleClick}
            ref={ref}
            // It's important to pass the props to allow Material UI to manage the keyboard navigation
            {...props}
        >
            <ExitIcon /> Logout
        </MenuItem>
    );
});

export default MyLogoutButton;