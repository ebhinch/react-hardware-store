import React, { Component } from "react";
//extends says we're inheriting everything that comes from react and bringing it into regular javascript file

//import homepage into header
//below, within "return" include header within div to return - this makes it render on screen
import Header from "./Header.js"
import Shop from "./Shop.js"


class HomePage extends Component {
    render(){
        return(
            <div>
                <Header />
                <hr />
                <Shop />
            </div>
        )
    }
    
}

export default HomePage; 