import { useState } from "react";


export default function List() {

    const [list, setList] = useState([]);

    const [count, setCount] = useState(1);

    function addItem() {
        const itemName = "Item 00" + count;
        setList((pre) => {
            return [...pre, itemName]
        });
        setCount((pres) => { return pres + 1 });
    }

    return (
        <div>
            <h1>List <button onClick={addItem}>Add Item</button> </h1>
            <ul>{
                list.map((el, index) => <li key={index}>{el}</li>)
            }
            </ul>
        </div>
    );
}