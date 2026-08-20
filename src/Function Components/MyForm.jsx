import { useState } from "react"


export default function MyForm() {
    //const [name, setName] = useState("");

    const [input, setInput] = useState({});

    function handleSubmit(e) {
        e.preventDefault();//This is for donot refersh the browser after submiting the value in input box
        console.log("form Submited");
        // console.log("current State : ", name);
        console.log("Current State", input);
    }

    return (

        <form onSubmit={handleSubmit}>

            <label> Enter your name : <input type="text" onChange={(e) => { setInput((pre) => { return { ...pre, name: e.target.value } }) }} /></label><br />
            <label> Enter your Email : <input type="email" onChange={(e) => { setInput((pre) => { return { ...pre, email: e.target.value } }) }} /></label><br />
            <label> Enter your Phone No : <input type="tel" onChange={(e) => { setInput((pre) => { return { ...pre, phone_no: e.target.value } }) }} /></label><br />
            <input type="submit" value="Submit form" />

        </form>

    );
}