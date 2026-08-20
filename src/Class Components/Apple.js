import React from "react";
import { Component } from "react";

class Apple extends React.Component{


    render(){

        const {appleInfo} = this.props ;
        const {type ,  color} = appleInfo;

        const text = `Hi i am ${color} ${type} Apple`;
        return(
            <div>
                <h1> This Text is From Class Components</h1>
                    <h2>{text}</h2>
            </div>
        );
    }
}

export default Apple;