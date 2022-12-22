import React from "react";
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from "./pages/signup/index";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
<<<<<<< HEAD
=======
import Hero from './components/hero-section';
>>>>>>> 845850dcc1660fab46883385691be75266cc95b9


function App() {
  return (
<>
<<<<<<< HEAD
<Navbar />
=======
{/* <Navbar /> */}
>>>>>>> 845850dcc1660fab46883385691be75266cc95b9
    <BrowserRouter>
     <Routes>
        <Route exact path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>

     <Hero/>
    </>
  );
}

export default App;
