import React from "react";
import "./App.css";
import Header from './components/Header';
import About from './components/About';
import Work from './components/work';
import Contact from './components/Contact';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Work />
    <Contact />
    </>
  );
}

export default App;
