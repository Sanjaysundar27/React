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

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setInput((pre) => {
            return {
                ...pre,
                [name]: value
            }
        });
    }

    return (

        <form onSubmit={handleSubmit}>

            <label> Enter your name : <input type="text" name="Name" onChange={handleChange} /></label><br />
            <label> Enter your Email : <input type="email" name="Email" onChange={handleChange} /></label><br />
            <label> Enter your Phone No : <input type="tel" name="Phone_no" onChange={handleChange} /></label><br />
            <input type="submit" value="Submit form" />

        </form>

    );
}