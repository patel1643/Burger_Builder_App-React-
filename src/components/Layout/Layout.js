import React from 'react';
import Auxillary from '../../hoc/Auxillary';
const layout = (props) => {
    return(
        <Auxillary>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main>
                {props.children}
            </main>
        </Auxillary>
    )
    
};

export default layout;