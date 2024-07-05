import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css" from "./react-bootstrap";
import "./App.css";
import Card from "./Components/Card";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
    <div className="fixed-top">
      <Navbar/>
      <Header />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center cardcss">
      <Card  />
      </div>
      <Footer/>
    </>
  );
}

export default App;
       
      