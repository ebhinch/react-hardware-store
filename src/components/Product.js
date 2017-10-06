import React, { Component } from "react";

//below is considered a "dumb" component. it's cleaner and faster and works just like the below code
const Product = ({productName, price, description }) => {
    //this uses "destructuring"
    // const {productName, price, description } = props
    //this is a stateless component
    return (
        <div>
        <h3>{productName}</h3>
        <h4>${price}</h4>
        <p>{description}</p>
      </div>
    )
}

//this is a stateful component 
// class Product extends Component {
//   render() {
//     return (
//       <div>
//         <h3>{this.props.productName}</h3>
//         <h4>${this.props.price}</h4>
//         <p>{this.props.description}</p>
//       </div>
//     );
//   }
// }

export default Product;