
import './App.css';
import React from 'react';
import Header from "./Components/Header";
import Main from './Components/Main';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import MyHelmet from './Components/MyHelmet';
import {
  Route, createBrowserRouter, createRoutesFromElements, RouterProvider
} from 'react-router-dom'

// import About from './pages/About';
// import Login from './pages/Login';
// import Menu from './pages/Menu';
// import OrderOnline from './pages/OrderOnline';
// import Reservation from './pages/Reservation';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Nav />}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="login" element={<Login />} />
//       <Route path="menu" element={<Menu />} />
//       <Route path="orderonline" element={<OrderOnline />} />
//       <Route path="reservation" element={<Reservation />} />
//     </Route>
//   )
// );

function App() {
  return (
    <>
      <MyHelmet />
      <Header />
      <Nav />
      {/* <RouterProvider router={router} />; */}
      <Main />
      <Footer />
    </>
  );
}

export default App;
