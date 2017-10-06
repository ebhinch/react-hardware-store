import React, { Component } from 'react';
import EditSaleItem from "./EditSaleItem"


class Header extends Component {
    //sets default pieces of data
    constructor() {
        //allows us to still bring in everything we're inheriting from component class, we're just writing it out this time
        super()
        //set state = an object. we are declaring initial default state
        this.state = {
            itemCurrentlyOnSale: " A Hammer!",
            editSaleItem: false
        }
    }

    //below is syntax for writing custom methods. always use "=" and "=>"
    //react prohibits you from setting state with "this.state.WHATEVER = WHATEVER-ELSE"
    toggleEditSaleItem = () => {
        //by using !this.state.editSaleItem, you can switch back-and-forth each time button is clicked
        this.setState({ editSaleItem: !this.state.editSaleItem })
    }
    //next we need to include this in the button below - with the onClick line of code

    handleItemCurrentlyOnSaleChange = (event) => {
        //always pass in an object when using this.setState() so always wrap in {}
        this.setState({
            itemCurrentlyOnSale: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Hardware Store</h1>
                <p>Currently on Sale: {this.state.itemCurrentlyOnSale}</p>
                <EditSaleItem 
                toggleEditSaleItem={this.toggleEditSaleItem}
                handleItemCurrentlyOnSaleChange={this.handleItemCurrentlyOnSaleChange}
                editSaleItem={this.state.editSaleItem}
                itemCurrentlyOnSale={this.state.itemCurrentlyOnSale} />
            </div>
        );
    }
}

export default Header;