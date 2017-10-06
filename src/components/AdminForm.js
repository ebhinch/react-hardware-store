import React, { Component } from 'react';

class AdminForm extends Component {
    constructor() {
        super();
        this.state = {
            newForm: {
                //whatever terms you use in next few lines must be the same ones you use in the "return" below...
                productName: "",
                price: "",
                description: ""
            }
        }
    }

    //below is a custom function    
    handleChange = (event) => {
        //the "..." on next line deeply clones object
        //"..." is called the "spread operator" - it says, "create a brand new object with all of the keys and values of the object you're cloning from"
        //cloning a new object
        //creates brand new object from scratch that has all of the values of what you've already made
        const newForm = { ...this.state.newForm }
        //using braces {} syntax to select object key
        //event.target.name references whatever you've named "productName", "price" and "description below"
        console.log(event.target.name)

        newForm[event.target.name] = event.target.value
        //take cloned object & apply to exist state
        this.setState({ newForm: newForm })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addProductToProductList(this.state.newForm)
        const emptyForm = {
            productName: "",
            price: "",
            description: ""
        }
        this.setState({ newForm: emptyForm })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    {/*value is equal to what we want to change in state*/}
                    {/*name is equal to the nkey we want to edit in the object*/}
                    {/* onChange is the event listener that updates state with a user's input*/}
                    <div>
                        <input onChange={this.handleChange} name="productName" type="text" placeholder="Name" value={this.state.newForm.productName} />
                    </div>

                    <div>
                        <input onChange={this.handleChange} name="price" type="text" placeholder="Price" value={this.state.newForm.price} />
                    </div>

                    <div>
                        <input onChange={this.handleChange} name="description" type="text" placeholder="Description" value={this.state.newForm.description} />
                    </div>

                    <div>
                        <button>Create A Product</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AdminForm;


//use splice and index 
//onclick splice 