import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
    cheese: 1.2,
    bacon: 0.7,
    meat: 1.5,
    salad: 1.3
}

class BurgerBuilder extends Component {

    state = {
        ingredients:{
            cheese: 0,
            salad: 0,
            bacon: 0,
            meat: 0                        
        },
        totalPrice : 3.25,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState(ingredients){
        
        const sum = Object.keys(ingredients).map(
            igkey => {
                return ingredients[igkey];
            }
        ).reduce((sum, el) => {
            return sum + el;
        },0);
        this.setState({purchasable: sum > 0})
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];  
        const newCount = oldCount + 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount;
        const price = this.state.totalPrice
        const newPrice = price + INGREDIENT_PRICES[type]
        
        this.setState({
            totalPrice:newPrice, ingredients:updatedIngredients
        });

        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount >= 1){
            const newCount = oldCount - 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount;
        const price = this.state.totalPrice
        const newPrice = price - INGREDIENT_PRICES[type]
        this.setState({
            totalPrice:newPrice, ingredients:updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
        }  
        
        
        

    };

    resetHandler = () =>{
        const updatedIngredients = {
            cheese: 0,
            salad: 0,
            bacon: 0,
            meat: 0
        }
        this.updatePurchaseState(updatedIngredients);
        return this.setState({ingredients : updatedIngredients, totalPrice: 3.25})
    };

    purchaseHandler = () => {
        this.setState({purchasing:true});
    }

    purchaseCancelHandeler = () =>{
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () =>{
        alert('You Continued!');
    }
    render() {
        return(
            <Auxillary>
                <Modal show = {this.state.purchasing} modalClosed={this.purchaseCancelHandeler}>
                    <OrderSummary ingredients={this.state.ingredients} 
                    purchaseCancelled={this.purchaseCancelHandeler}
                    purchaseContinued={this.purchaseContinueHandler} />
                </Modal>              
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                addIngredient={this.addIngredientHandler}
                removeIngredient = {this.removeIngredientHandler}
                price={this.state.totalPrice}
                reset={this.resetHandler}
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandler} />
            </Auxillary>
        );
    }


}



export default BurgerBuilder;