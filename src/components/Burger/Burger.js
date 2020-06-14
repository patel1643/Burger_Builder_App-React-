import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';



const burger = ( props ) =>{
    
    let dynamicIngredients = Object.keys(props.ingredients).map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
               return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    
    if(dynamicIngredients.length === 0){
        dynamicIngredients = <p>Please start adding your favourite ingredients here!</p>        
        }
    return(
        
            <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {/* renders the ingredients dynamically */}
            {dynamicIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
      
        
        
    )
};




export default burger;