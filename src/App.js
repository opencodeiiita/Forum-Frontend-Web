import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Community from "./pages/community";
import Profile from "./pages/profile";
import Heropage from "./pages/heropage";
import Error from "./pages/error/index";
import Hero from "./components/hero-section";
import SignIn from "./pages/signin";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Heropage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<SignIn />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
