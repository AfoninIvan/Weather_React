import React from 'react'
import { NavLink } from 'react-router-dom';
import { Grid } from '@material-ui/core';

//Setting interface for props
interface FooterUlTypes {
    sectionName: string,
    liArr:Array<liArrTypes>,
    classes: ClassesTypes,
}
interface liArrTypes {
        label:string,
        path:string
}
interface ClassesTypes {
    [key: string]: string
}

export const FooterUl = (props: FooterUlTypes) => {
    //Defining props
    const {
        sectionName,
        liArr,
        classes,
        
    } = props
    
    return (
        <div className={classes.footer__info} >
            <h1 className={classes.footer__h1} >{sectionName}</h1>
            <Grid container
            direction="column"
             >
              {liArr.map((elem,index) => 
                    <NavLink to={elem.path} className={classes.footer__li} key={elem.label + index + 'footer'}>
                        {elem.label}
                        </NavLink>
                )}
            </Grid>
        </div >
    )
}
