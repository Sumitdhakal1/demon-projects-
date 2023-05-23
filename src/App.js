import React,{useState} from 'react';
import './App.css';
import Topbar from './components/topbar';
import Home from './pages/home';
import Header from './components/header';
import About from './components/about';
import Menu from './components/menu';
import Reserv from './components/reserv';
import Gallery from './components/gallery';
import Review from './components/review';
import Blog from './components/blog';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [openNav, setOpenNav] = React.useState(false);
  return (
    <div className="App">
      <Router>
      <Topbar setOpenNav={setOpenNav}/>
      
      {openNav && <Sidebar setOpenNav={setOpenNav} />}
      <Header/>
      <About/>
      <Menu/>
      <Reserv/>
      <Gallery/>
      <Review/>
      <Blog/>
      <Footer/>
      <Routes>
        {/* <Route path="/" exact element={<Home />}/>  */}
      </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
