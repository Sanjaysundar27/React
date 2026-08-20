import { useEffect, useState } from "react";


export default function Timer() {

    const [count, setCount] = useState(0);

//We can use the useEffect() for changing the background images
    useEffect(() => {
        console.log("Screen Render ! ");
        //checkCount();
     //   setCount(1);
     setTimeout(()=>{
        setCount((pre)=>{
            return pre+1;
        })
     },1500)
    });


    function checkCount() {
        if (count > 10) {
            setCount(1);
        }
    }


    function updateCount() {
        setCount((pre) => {
            return pre + 1;
        })
    }

    return (
        <div>
            <h1>I have a render {count} Times!</h1>
            <button onClick={updateCount}>Increase Count</button>
        </div>
    );
}