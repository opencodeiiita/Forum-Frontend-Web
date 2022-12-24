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
<<<<<<< HEAD

<Navbar />

=======
<Navbar />
>>>>>>> b25a2f7043a086c4204a756d44beca3de13488e8
    <BrowserRouter>
     <Routes>
        <Route exact path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<SignIn/>}/>

      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
