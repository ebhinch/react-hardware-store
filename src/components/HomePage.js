import React, { Component } from "react";
//extends says we're inheriting everything that comes from react and bringing it into regular javascript file

//import homepage into header
//below, within "return" include header within div to return - this makes it render on screen
import Header from "./Header.js"

class HomePage extends Component {
    render(){
        return(
            <div>
                <h1>Home Page</h1>
                <Header />
            </div>
        )
    }
    
}

export default HomePage; 