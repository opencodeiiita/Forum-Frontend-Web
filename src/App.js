import React from "react";
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from "./pages/signup/index";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

import Hero from './components/hero-section';
import SignIn from "./pages/signin";


function App() {
  return (
<>


<Navbar />

    <BrowserRouter>
     <Routes>
        <Route exact path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<SignIn/>}/>

      </Routes>
    </BrowserRouter> 

<Hero/>
    </>
  );
}

export default App;
