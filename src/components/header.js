import React, { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import ModelTrainingRoundedIcon from '@mui/icons-material/ModelTrainingRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = () => {
    const [drawer, setDrawer] = useState(false);
    const [menu, setMenu] = useState(null);
    const handleClick = (event) => {
        setMenu(event.currentTarget);
    };
    const handleClose = () => {
        setMenu(null);
    };
    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setDrawer(open);
    };
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Inbox', 'Home', 'Saved'].map((text, index) => (
                    <ListItem key={text} disablePadding style={text === "Dashboard" ? { backgroundColor: "lightblue" } : null}>
                        <ListItemButton>
                            <ListItemIcon >
                                {text === "Home" ? <DashboardCustomizeRoundedIcon /> : text === "Inbox" ? <InboxIcon />: <ModelTrainingRoundedIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Profile', 'Account', 'Settings'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {text === "Profile" ? <AccountCircleRoundedIcon /> : text === "Account" ? <ManageAccountsRoundedIcon /> : <SettingsRoundedIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <SwipeableDrawer
                anchor="left"
                open={drawer}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                {list()}
            </SwipeableDrawer>
            <div style={{ backgroundColor: "lightblue", height: "90px", marginTop: "0", padding: "10px" }}>

                <p>{matches? <h3 style={{ textAlign: "center", position:"relative",top:"10px" }}>PropSeeker</h3>
                :<h4 style={{ textAlign: "center", position:"relative",top:"10px" }}>PropSeeker</h4>}<MenuRoundedIcon style={{ position: "relative", top: "-40px", cursor: "pointer" }} sx={{ }} onClick={toggleDrawer(true)} /></p>
                <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkIN3NWgzgBDUrWFpowhW7ismNK_F5JkscSQ&usqp=CAU" style={{ float: "right", position: "relative", top: "-70px", cursor: "pointer", width:!matches?"35px":null, height:!matches?"35px":null}} onClick={handleClick}  />
                {matches? <NotificationsRoundedIcon style={{ float: "right", position: "relative", top: "-65px", left: "-20", cursor: "pointer" }} sx={{ fontSize: "30px" }} /> : null}
                
                <Menu
                    id="basic-menu"
                    anchorEl={menu}
                    open={menu}
                    onClose={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem>
                    <div>
                    <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkIN3NWgzgBDUrWFpowhW7ismNK_F5JkscSQ&usqp=CAU"
                    sx={{display:"inline-block"}}/><span style={{marginLeft:"2px",position:"relative",top:"-20px"}}>Conor Mecgregor</span>
                    <p style={{fontSize:"small",fontStyle:"italic",fontWeight:"lighter",marginLeft:"40px",position:"relative",top:"-20px"}}>Software developer @Google</p>
                    </div>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
                </Menu>
            </div>
        </>
    )
}
export default Header;

