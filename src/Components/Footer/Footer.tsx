
import React from 'react'
import { FooterUl } from './FooterUl';
import { useStyles } from "../../Styles/ComponentsStyles/Footer";
import { Grid } from '@material-ui/core';

export const Footer = () => {
    const classes = useStyles()
    return (
        <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            alignContent="stretch"
            wrap="nowrap"
            className={classes.footer}
        >
            <FooterUl
                classes={classes}
                sectionName="Subscription"
                liArr={[{
                    label: 'How to start',
                    path: '/start'
                },
                {
                    label: 'Pricing',
                    path: '/pricing'
                },
                {
                    label: 'Subscribe for free',
                    path: '/subscription'
                },
                {
                    label: 'Faq',
                    path: '/faq'
                }]}
            />
            <FooterUl
                classes={classes}
                sectionName="Terms and Conditions"
                liArr={[{
                    label: 'Terms and conditions of sale',
                    path: '/terms'
                },
                {
                    label: 'Privacy Policy',
                    path: '/policy'
                }]}
            />
            <FooterUl
                classes={classes}
                sectionName="About us"
                liArr={[{
                label:`Click here to know more about us`,
                path:'/about'
            }]} />
        </Grid>
    )
}
