import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import  Login  from './components/Login';
import Rides from './components/Rides';
import Driver from "./components/DriverDetails"
import Home from './components/Home';
import Footer from "./components/Footer.js";
import Navbar from './components/Navbar';
import DriverList from './components/DriverList';
import Driver1 from './components/DriverDetails1';
import Driver2 from './components/DriverDetails2';
import Driver3 from './components/DriverDetails3';
import Driver4 from './components/DriverDetails4';
import Driver5 from './components/DriverDetails5';
import Feedback from './components/Feedback';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Rides" element={<Rides />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/DriverDetails" element={<Driver />} />
          <Route path="/DriverList" element={<DriverList />} />
          <Route path="/DriverDetails1" element={<Driver1 />} />
          <Route path="/DriverDetails2" element={<Driver2 />} />
          <Route path="/DriverDetails3" element={<Driver3 />} />
          <Route path="/DriverDetails4" element={<Driver4 />} />
          <Route path="/DriverDetails5" element={<Driver5 />} />
          <Route path="/Feedback" element={<Feedback />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
