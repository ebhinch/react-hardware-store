//within shopview, add "add to cart" button


import React, { Component } from 'react'

import Product from "./Product.js"


class CartView extends Component {
    render() {
        return (
            <div className="cart">
                <h1>Shopping Cart</h1>
                <div>
                    { this.props.cartList.map((product, index) => {
                        return (
                            <div key={index}>
                                <Product 
                                productName={product.productName} 
                                price={product.price} 
                                description={product.description}
                                />
                                <button onClick={() => this.props.deleteProductFromCartList(index)}>Delete From Cart</button >
                            </div>
                        )
                    })}
                </div>
            </div>

        )
    }
}

export default CartView


