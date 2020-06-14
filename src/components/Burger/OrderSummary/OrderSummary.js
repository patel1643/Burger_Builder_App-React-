import React from 'react';
import Auxillary from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients).map(igKey =>{
    return <li key={igKey}> <span style={{textTransform: 'capitalize'}}> {igKey} </span>: {props.ingredients[igKey]}</li>
    })
    return(
        <Auxillary>
            <h3> Your order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Your total is: <strong>${props.total}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType='Success' clicked={props.purchaseContinued} >Continue</Button>


        </Auxillary>
    )
}

export default orderSummary;