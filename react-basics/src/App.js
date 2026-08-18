import logo from './logo.svg';
import './App.css';
import Garage from './Function Components/Garage';
import Apple from './Class Components/Apple';
import Header from './Function Components/Header';

function App() {

  const appleInfo = {
    type : "Fuji",
    color : "Green"
  };

  return (
    <div>
      <h1>React Training....from App.js</h1>
      <Garage />
      <Header />
      <Apple  appleInfo = {appleInfo}/>
    </div>
  );
}

export default App;
