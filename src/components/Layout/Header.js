import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import {
    Grid,
    Button,
    AppBar,
    Toolbar,
    MenuItem,
    Divider,
    Menu,
    Avatar
} from "@material-ui/core";

import logo from "./logo.png";


const styles = (theme) => ({
    row: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    container: {
        width: 1170,
        margin: "auto"
    },
    buttonFontSize: {
        fontSize: "11px",
        color: "#a1a1a1"
    },

    AppBar: {
        //height:400,
        //background: `url("http://lorempixel.com/1920/1080/nature") no-repeat center center`,
        backgroundColor: "#fff",
        backgroundSize: "cover"
    },
    mainLogo: {
        color: "#a1a1a1",
        justifyContent: "left",
        "&:hover": {
            background: "transparent"
        }
    },

    avatar: {
        height: "100%",
        borderRadius: 0
    },

    loginButton: {
        background: "#e91e63",
        color: "#fff",
        borderRadius: "25px",
        padding: "0px 25px",

        "&:hover": {
            background: "blue",
            boxShadow: "0px 2px 10px #888888"
        }
    }
});

function Header(props) {
    const { classes } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default" className={classes.AppBar}>
                <Grid item sm={12} xs={12} className={classes.container}>
                    <Toolbar>
                        <Grid className={classes.grow}>
                            <Button className={classes.mainLogo}>
                                <Avatar
                                    src={logo}
                                    className={classes.avatar}
                                />
                            </Button>
                        </Grid>
                        <Button color="inherit" className={classes.buttonFontSize}>
                            <Link to="/">Home</Link>
                        </Button>
                        <Button
                            color="inherit"
                            onClick={handleMenu}
                            className={classes.buttonFontSize}
                        >
                            Program
                        </Button>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Action</MenuItem>
                            <MenuItem onClick={handleClose}>Another Action</MenuItem>
                            <Divider />
                            <MenuItem onClick={handleClose}>Something else here</MenuItem>
                        </Menu>
                        <Button
                            color="inherit"
                            onClick={handleMenu}
                            className={classes.buttonFontSize}
                        >
                            Certificate
                        </Button>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Action</MenuItem>
                            <MenuItem onClick={handleClose}>Another Action</MenuItem>
                            <Divider />
                            <MenuItem onClick={handleClose}>Something else here</MenuItem>
                        </Menu>
                        <Button
                            color="inherit"
                            onClick={handleMenu}
                            className={classes.buttonFontSize}
                        >
                            Claims
                        </Button>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Action</MenuItem>
                            <MenuItem onClick={handleClose}>Another Action</MenuItem>
                            <Divider />
                            <MenuItem onClick={handleClose}>Something else here</MenuItem>
                        </Menu>
                        <Button
                            color="inherit"
                            onClick={handleMenu}
                            className={classes.buttonFontSize}
                        >
                            Users
                        </Button>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Action</MenuItem>
                            <MenuItem onClick={handleClose}>Another Action</MenuItem>
                            <Divider />
                            <MenuItem onClick={handleClose}>Something else here</MenuItem>
                        </Menu>
                        <Button
                            color="inherit"
                            onClick={handleMenu}
                            className={classes.buttonFontSize}
                        >
                            Payments
                        </Button>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Action</MenuItem>
                            <MenuItem onClick={handleClose}>Another Action</MenuItem>
                            <Divider />
                            <MenuItem onClick={handleClose}>Something else here</MenuItem>
                        </Menu>
                        <Button
                            color="inherit"
                            onClick={handleMenu}
                            className={classes.buttonFontSize}
                        >
                            Contact Us
                        </Button>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Action</MenuItem>
                            <MenuItem onClick={handleClose}>Another Action</MenuItem>
                            <Divider />
                            <MenuItem onClick={handleClose}>Something else here</MenuItem>
                        </Menu>
                    </Toolbar>
                </Grid>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(Header);
