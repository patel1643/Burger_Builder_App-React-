import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
const layout = (props) => {
    return(
        <Auxillary>
            <div> SideDrawer</div>
            <Toolbar />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auxillary>
    )
    
};

export default layout;