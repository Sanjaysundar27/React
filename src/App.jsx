import { useState } from 'react'
import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';
import OldBooks from './components/OldBooks';
import NewBooks from './components/NewBooks';
import Login from './components/Login';
import DashBoard from './components/DashBoard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>


      <BrowserRouter>

        <Link to="/">Home</Link> <br />
        <Link to="/about">About</Link><br />
        <Link to="/contact-us">Contact - us </Link><br />
        <Link to="/user/1">User 1</Link><br />
        <Link to="/book-types/old_books">Old Books</Link><br />
        <Link to="/book-types/new_books">New books</Link><br/>
        <Link to= "/Login">Login</Link>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/user/:id' element={<User />} />

          <Route path='/book-types'>
            <Route path='old_books' element={<OldBooks />} />
            <Route path='new_books' element={<NewBooks />} />
          </Route>
          <Route path='/login' element ={<Login/>}/>
          <Route path='/dashboard' element = { <DashBoard/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
