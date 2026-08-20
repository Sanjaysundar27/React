import React from "react";
import Car from "./Car";

export default function Garage() {

    // const brand = "Ferrari";
    //    const color = "Blue";

    const carInfo = {
        brand: "Ferrari",
        color: "Black"
    }

    //  const carInfo = {};

    const carList = [
        {
            brand: "BMW",
            color: "Blue"
        },

        {
            brand: "Ford",
            color: "Gray"
        },

        {
            brand: "Tesla",
            color: "Black"
        }
    ];

    const isDoorOpened = true;


    return (
        <div>
            <h1>Who is lives inside my Garage ? </h1>
            {isDoorOpened ? <h2>Garage door is opened </h2> : <h2>The Garage is OpenSoon</h2>}
            {/* <Car brand = {brand} color = {color}/> */}
            {/* <Car carInfo = {carInfo}/> */}
            <ol>
                {carList.map((car, index) => (
                    <li key={index}><Car carInfo={car} /></li>
                ))}
            </ol>

        </div>
    );
}
