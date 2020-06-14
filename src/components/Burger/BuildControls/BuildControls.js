import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:'Cheese', type:'cheese'},
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Meat', type:'meat'}
    
]

const buildControls = (props) =>{
 return(
     <div className={classes.BuildControls}>
         <p>Total: <strong>${props.price.toFixed(2)}</strong></p>
         <button onClick={props.reset}>Reset</button>
         {controls.map(ctrl =>(
             <BuildControl 
             key={ctrl.label} 
             label={ctrl.label}
             add={() => props.addIngredient(ctrl.type)}
             remove={() => props.removeIngredient(ctrl.type)}
             />
             
         ))}  
        <button disabled={!props.purchasable} 
        className={classes.OrderButton}
        onClick={props.ordered}>ORDER NOW</button>
     </div>
 )   

};


export default buildControls;