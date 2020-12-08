import React from 'react'
import { useStyles } from "../../Styles/ComponentsStyles/Header";
import { Grid } from '@material-ui/core';
import {
    NavLink,
} from "react-router-dom";
import {  } from "../../Styles/ComponentsStyles/Header";
export const Header = () => {
    const classes = useStyles()
    return (
        <header>
            <Grid container
                direction="row"
                justify="space-between"
                alignItems="center"
                className={classes.header}
            >
            <Grid container
             alignItems="center" 
             className={classes.menu}>
                <NavLink to="/"><img src='../../images/logo.png' alt="" className="logo" /></NavLink>
                <div className="navigation_links">
                    <NavLink to="/Locations">Locations</NavLink >
                    <NavLink to="/Forecast">Forecast</NavLink >
                </div>
            </Grid>
            <div className="authorization">
                <div className="dropdown">
                    <NavLink to="/Cabinet" className="username">username</NavLink>
                    <div className="dropdown_content">
                        <NavLink to="/Profile">Profile</NavLink>
                        <NavLink to="/Settings">Settings</NavLink>
                        <NavLink to='/' className="logout">Log out</NavLink>
                    </div>
                </div>
                <i className="far fa-user"></i>
            </div>
            </Grid>
        </header>
    )
}
