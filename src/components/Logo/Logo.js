import React from 'react';
import burgerLogo from '../../icons/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => {

    return(
        <div className={classes.Logo} >
            <img src={burgerLogo} alt="Brand-Logo"/>
        </div>
    )
}; 


export default logo;