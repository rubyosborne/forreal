import React from 'react';
import { Container, AppBar, Typography} from '@material-ui/core';
import spanner from '../images/BlackSpanner.png';
import useStyles from './styles';
import useStylesAboutUs from './AboutUsStyle.js';
import Christos from '../images/Christos.jpg';
import Ruby from '../images/Ruby.jpg';
import Leo from '../images/Leo.jpg';

function AboutUs() {
    const classes = useStyles();
    const classestwo = useStylesAboutUs();
    return (
        <Container maxWidth="lg" >
            <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">About Us</Typography>
        <img className={classes.image} src={spanner} alt="icon" height="60" />
        </AppBar>
        <div className={classestwo.photos} >
        <img src={Christos} className={classestwo.photo} alt="christos"/>
        <img src={Ruby} className={classestwo.photo} alt="ruby"/>
        <img src={Leo} className={classestwo.photo} alt="leo"/>
        </div>
        <div className={classestwo.para}> 
        <h2>Hello and welcome to the MechProjects Website!!<br /> </h2>
        <p> The main purpose of me building this website was to
            learn how to create a deploy a full mern stack web application and here we are yay. The secondary purpose 
            is to create a platform where I can upload projects that we have done so we can look back 
            and see what cool things we have achieved. If you would like to be added to the websites admin and therefore 
            be able to post your projects please send me an email and I will give you a key that can be used through the
            log in portal. (This component isn't working yet)
            <br />
            Thanks for visiting !
            <br /><br />
            Contact: ruby.osborne@gmail.com
            </p>
        </div>
      
   
        </Container>
    )
}

export default AboutUs