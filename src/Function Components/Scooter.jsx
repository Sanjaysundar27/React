import { useState } from "react";


//Multi Hooks
export default function Scooter(){

    //Multiple State
    // const [color , setColor] = useState("Red");
    // const [brand , setBrand] = useState("Honda");
    // const [model , setModel] = useState("Activa 6G");
    // const [year , setYear] = useState("2020");

// State Object
    const [scooter , setScooter] = useState(
        {
            color : "Red" ,
            brand  :"Honda",
            model : "Activa 6G",
            year : "2020"
           }
    );


    // function updataDetails(){
    //     setScooter(
    //         {
    //             color : "Blue",
    //             brand : "Honda",
    //             model : "Activa 5G",
    //             year  : "2019"
    //         }
    //     );
    // }

    //Spread Operator to get the previous value without lose
        function updataDetails(){
        setScooter((previousState) =>{
            return{...previousState , 
                color : "Blue",
                model : "Activa 5G"
            }
        });
    }

    return(
        <div>
            <h1> My Scooter </h1>
                <p>Color : {scooter.color}</p>
                <p>Brand : {scooter.brand}</p>
                <p>Model : {scooter.model}</p>
                <p>Year : {scooter.year}</p>
            <button onClick={updataDetails}>Next Model</button>
        </div>
    );
}