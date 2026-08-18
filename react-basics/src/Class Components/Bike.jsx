import React from "react";

class Bike extends React.Component{

constructor(){
    super();
        this.state = { color : "Black"  }
}
    render(){
        return(
        <div>
            <h1>My Bike Color is {this.state.color}</h1>
                <button onClick={ ()=> { this.setState( {color : "Black And Red"} )}}>Change Color </button>
        </div>
            );vvv
    }
}

export default Bike;
