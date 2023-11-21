
import './App.css';
import React from 'react';
import Header from "./Components/Header";
import Home from './Components/Home';
import Footer from './Components/Footer';
import MyHelmet from './Components/MyHelmet';
import {
  Routes, Route
} from 'react-router-dom';

import About from './pages/About';
import Login from './pages/Login';
import Menu from './pages/Menu';
import OrderOnline from './pages/OrderOnline';
import Reservation from './pages/Reservation';


function App() {
  return (
    <>
      <MyHelmet />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/orderonline" element={<OrderOnline />}/>
        <Route path="/reservation" element={<Reservation />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
