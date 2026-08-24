    import { useState } from "react"


    export default function MyForm() {
        //const [name, setName] = useState("");

        const [input, setInput] = useState({ Phone: "+91", Email: "@gmail.com" });


        function handleSubmit(e) {
            e.preventDefault();//This is for donot refersh the browser after submiting the value in input box
            console.log("form Submited");
            // console.log("current State : ", name);
            console.log("Current State", input);
        }

    function handleChange(e) {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value
        }));
    }


        return (

            <form onSubmit={handleSubmit}>

                <label> Enter your name : <input type="text" name="Name" onChange={handleChange} /></label><br />
                <label> Enter your Email : <input type="email" name="Email" onChange={handleChange} value={input.Email} /></label><br />
                <label> Enter your Phone No : <input type="tel" name="Phone" onChange={handleChange} value={input.Phone} /></label><br />

                <label>Select your country <select name="country" onChange={handleChange} value={input.country}>
                    <option value="">Select</option>
                    <option value="Australia">Australia</option>
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                </select>
                </label><br/>
                <input type="submit" value="Submit form" />

            </form>

        );
    }