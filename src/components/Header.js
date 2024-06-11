import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../redux/actions/userActions';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleChange = (event) => {
    dispatch(setUser(event.target.value));
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="logo.png" alt="Logo" style={{ height: '50px', marginRight: '20px' }} />
          <IconButton edge="start" color="inherit" aria-label="menu" style={{ marginLeft: '10px' }}>
            <MenuIcon />
          </IconButton>
          <Select
            value={currentUser}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'User Selection' }}
            sx={{
              marginLeft: '30px',
              minWidth: '150px',
              backgroundColor: 'white',
              borderRadius: '8px',
              '& .MuiSelect-select': {
                padding: '8px',
              },
            }}
          >
            <MenuItem value="" sx={{color: 'red'}}>
              User
            </MenuItem>
            <MenuItem value="User 1">User 1</MenuItem>
            <MenuItem value="User 2">User 2</MenuItem>
            <MenuItem value="User 3">User 3</MenuItem>
          </Select>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <HelpIcon />
          </IconButton>
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
