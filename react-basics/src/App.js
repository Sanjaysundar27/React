import logo from './logo.svg';
import './App.css';
import Garage from './Function Components/Garage';
import Apple from './Class Components/Apple';
import Header from './Function Components/Header';
import FavoriteColor from './Function Components/FavoriteColor';
import Bike from './Class Components/Bike';
import Scooter from './Function Components/Scooter';
import List from './Function Components/List';
import Timer from './Function Components/Timer';

function App() {

  const appleInfo = {
    type : "Fuji",
    color : "Green"
  };

  return (
    <div>
      <Header />
      <h1>React Training....from App.js</h1>
      <Garage />
      <Apple  appleInfo = {appleInfo}/>
      <FavoriteColor/>
      <Bike/>  
      <Scooter/>
      <List/>
      <Timer/>
    </div>
  );
}

export default App;
