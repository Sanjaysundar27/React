import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    

    const navgate = useNavigate();

    function onSubmit(){
        navgate( '/dashboard');
    }

    return(
        <div>
            <h1>Login Page</h1>
                <button onClick={onSubmit}>Login</button>
        </div>
    );
}