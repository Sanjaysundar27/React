import React, { StrictMode } from "react";

class Bike extends React.Component{

constructor(){
    super();
        this.state = { 
            color : "Black" ,
            model : "Pulser NS160",
            brand : "Bajaj",
            year : 2026
        }
}


    render(){
        return(
        <div>
            <h1> {this.state.brand} bike details </h1>
                <p> color : {this.state.color}</p>
                <p> model : {this.state.model}</p>
                <p> year of Manufactor : {this.state.year}</p>
                <button onClick={ ()=> { this.setState( (pre) =>{return {...pre ,color :"White and Pink"}})}}>Change Color </button>
        </div>

    );
}

    }

export default Bike;
