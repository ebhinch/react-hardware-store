import React, { Component } from 'react'
import Product from './Product'
import AdminForm from "./AdminForm"

class AdminView extends Component {
    constructor() {
        super()

        this.state = {
            productList: [
                {
                    productName: 'Hammer',
                    description: 'Itsa hammer',
                    price: 12.3
                },
                {
                    productName: 'Nail',
                    description: 'Itsa nail',
                    price: 0.12
                }
            ]
        }
    }

    addProductToProductList = (newProduct) => {
        //setState completely erases anything that was already there and replaces with whatever you're setting it to 
        //as result we have to use "..." spread operator
        //create brand new array that looks exactly like the one you started with. BUT this new array has no connection to the one it was cloned from
        const newProductList = [...this.state.productList]
        //push to new array
        newProductList.push(newProduct)
        //completely override state with new 
        this.setState({productList: newProductList})
    }

    //there's another way to do this (ask aaron)
    //id is index of where it is in array
    deleteProductFromProductList = (id) => {
        const newProductList = [...this.state.productList]
        newProductList.splice(id, 1)
        this.setState({productList: newProductList})
    }

    render() {
        return (
            <div>
                <h1>Admin View</h1>
                <h2>Products</h2>
                <div>
                    {this.state.productList.map((product, index) => {
                        return (
                            <Product 
                                key={index} 
                                index={index}
                                productName={product.productName} 
                                price={product.price} 
                                description={product.description} 
                                deleteProductFromProductList={this.deleteProductFromProductList}
                            />
                        )
                    })}
                </div>
                <h2>Create A New Product</h2>
                <AdminForm addProductToProductList={this.addProductToProductList} />
            </div>
        )
    }
}

export default AdminView