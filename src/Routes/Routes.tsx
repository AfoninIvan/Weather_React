import React from 'react'
import { Route, Switch } from "react-router";
import { Homepage } from '../Components/HomePage/HomePage';
import { Login } from '../Components/Login';

//Root Router is using to track all routes in app

export const Routes = ()=>{
    return(
    <>
        <Switch>
            <Route path="/" component={Homepage}/>
            <Route path='login/' component={Login}/>
        </Switch>
    </>
    )
}