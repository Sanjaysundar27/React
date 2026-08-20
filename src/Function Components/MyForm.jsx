import { useState } from "react"


export default function MyForm() {
    const [name, setName] = useState("");

    
    function handleSubmit(){
        console.log("form Submited");
        console.log("current State : ", name);                
    }

    return (

        <form onSubmit={handleSubmit}>

            <label> Enter your name : <input type="text" onChange={(e) => { setName(e.target.value) }} /></label>
        <input type="submit" value="Submit form"/>
        </form>

    );
}