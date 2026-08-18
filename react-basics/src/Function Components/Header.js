import './Header.css';
import styles from "./Header.module.css";


export default function Header(){

    //Inline css
    const myStyle = {
        color : 'yellow',
        backgroundColor : "red",
        padding : "20px",
        border : "3px solid black",
        fontSize : "5rem",
        FontFamily : "sans-serif",
        borderRadius: "25px"
    }

    return (
        <div>
                {/* <h1 style={myStyle}>Hello Styling</h1> */}
                <h1 className={styles.bigBlue}>Hello Styling</h1>
                <p> Add a Little style</p>
        </div>
    );
}