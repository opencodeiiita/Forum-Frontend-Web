import React from "react";
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from "./pages/signup/index";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {
  return (
<>
<Navbar />
    <BrowserRouter>
     <Routes>
        <Route exact path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>

      <h1 className="text-3xl font-bold underline text-center mt-5">Forum!</h1>
      <Signup/>
      
    </>
  );
}

export default App;
