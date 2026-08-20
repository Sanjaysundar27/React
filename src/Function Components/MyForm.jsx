import { useState } from "react"


export default function MyForm() {
    const [name, setName] = useState("");

    console.log("current State : ", name)

    return (

        <form>

            <label> Enter your name : <input type="text" onChange={(e) => { setName(e.target.value) }} /></label>

        </form>

    );
}