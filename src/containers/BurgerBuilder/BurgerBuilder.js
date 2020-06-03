import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients:{
            cheese: 2,
            salad: 2,
            bacon: 1,
            meat: 1                        
        }
    }

    render() {
        return(
            <Auxillary>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls..</div>
            </Auxillary>
        );
    }


}



export default BurgerBuilder;