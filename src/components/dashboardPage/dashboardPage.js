import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import "./styles.css";
import { useNavigate } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Avatar,
    Box,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    CssBaseline,
    Drawer,
    Typography
} from "@material-ui/core";
import {
    Apps,
    Menu,
    ContactMail,
    AssignmentInd,
    Home,

} from "@material-ui/icons";
import { useAlert } from 'react-alert'
import LogoutIcon from '@mui/icons-material/Logout';
import Profile from "../profile/profile";
import DashboardProfile from './dashboardProfile'

const useStyles = makeStyles((theme) => ({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        margin: "0.5rem auto",
        padding: "1rem",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "tan"
    }
}));

const listItems = [
    {
        listIcon: <Home />,
        listText: "Dashboard",
        path: "/dashboard"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Profile",
        path: '/dashboard'
    },
    {
        listIcon: <LogoutIcon />,
        listText: "Logout",
        path: "/"
    }
];

export default function DashboardPage() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [navigatedata, setNavigateData] = useState('Dashboard')
    const location = useLocation();
    const navigate = useNavigate();
    const userData = location.state;
    const [stateData] = useState(location.state)
    const alert = useAlert()
    const [image, setImage] = useState('https://i.ibb.co/rx5DFbs/avatar.png')
    console.log("sata", location.state)
    console.log("stateData", stateData)
    useEffect(() => {
        if (userData && userData.image) {
            setImage(userData?.image)
        }
    }, [image])
    if (stateData === null) {

        // alert.info("User Login Expired")
        navigate("/")
        return


    }

    const toggleSlider = () => {
        setOpen(!open);
    };

    const handleNavigate = (navigateData) => {
        setNavigateData(navigateData.listText);
        navigate(navigateData.path)
    }

    const sideList = () => (
        <Box className={classes.menuSliderContainer} component="div">
            <Avatar
                className={classes.avatar}
                src={image ? image : "https://i.ibb.co/rx5DFbs/avatar.png"}
                alt="image"
            />
            <Divider />
            <List>
                {listItems.map((listItem, index) => (
                    <ListItem className={classes.listItem} button key={index}>
                        <div style={{ display: "flex" }} onClick={() => handleNavigate(listItem)}>
                            <ListItemIcon className={classes.listItem} >
                                {listItem.listIcon}
                            </ListItemIcon>
                            <ListItemText primary={listItem.listText} />
                        </div>

                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <CssBaseline />

            <Box component="nav">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton onClick={toggleSlider}>
                            <Menu />
                        </IconButton>
                        <Typography>Portfolio</Typography>
                        <Drawer open={open} anchor="right" onClose={toggleSlider}>
                            {sideList()}
                        </Drawer>
                    </Toolbar>
                </AppBar>
                {navigatedata && navigatedata === "Dashboard" ? <DashboardProfile image={image} data={stateData} /> : ''}
                {navigatedata && navigatedata === "Profile" ? <Profile image={image} data={stateData} /> : ''}
            </Box>
        </>
    );
}
