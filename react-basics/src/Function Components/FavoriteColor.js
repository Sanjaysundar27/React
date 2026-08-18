import { useState } from "react";


export default function FavoriteColor(){

    
    // let color = "Blue";
    const  [color , setColor] = useState("Black")

    return(
        <div>
            <h1>My Favorite Color is {color} </h1>
                <button onClick={ ()=> { setColor("White") }}> Change the Color</button>
        </div>
    );
}