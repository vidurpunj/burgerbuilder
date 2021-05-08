import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BugerBuilder extends Component {
    // constructor() {

    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    addBugerIntemHandler = () => {
        console.log('add Item')
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls addBugerIngredient={() => this.addBugerIntemHandler}/>
            </Aux>
        );
    }
}

export default BugerBuilder;
