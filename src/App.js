import React, { useContext, useEffect, useState } from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import { Context } from './context/Context';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import ShowProject from './components/ShowProject';
import ShortAbout from './components/ShortAbout';
import SelectedWorks from './components/SelectedWorks';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Image from './pages/Image';
import About from './pages/About';
import Works from './pages/Works';


function App() {

  const { setMenuLine } = useContext(Context);
  const location = useLocation();
  const [display, setDisplay] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {

    if (location.pathname === '/') setMenuLine("home");
    if (location.pathname === '/about') setMenuLine("about");
    if (location.pathname === '/works') setMenuLine("works");
    if (location.pathname === '/contact') setMenuLine("contact");
    if (location.pathname === '/image'){
      setMenuLine("image");
        navigate("/")
    }
  }
    , [location.pathname, setMenuLine, display]);


  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />  
        <Route path="/image/:name" element={<Image />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </div>
  );
}

export default App;
