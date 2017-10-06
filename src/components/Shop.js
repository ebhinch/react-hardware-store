import React, { Component } from 'react'
import AdminView from './AdminView'
import ShopView from './ShopView'
import CartView from './CartView'

class Shop extends Component {
  constructor () {
    super()

    this.state = {
        //will show admin view as long as its true
        isAdmin: true
    }
  }

  toggleIsAdmin = () => {
      //whatever you put inside {} after setState is what you want to change
      this.setState({isAdmin: !this.state.isAdmin})
  }

  render () {
    return (
      <div className="shop">
          <button onClick={this.toggleIsAdmin}>Toggle Admin</button>
        <div className="products">
          {this.state.isAdmin ? <AdminView /> : <ShopView />}
        </div>
        <CartView />
      </div>
    )
  }
}

export default Shop

