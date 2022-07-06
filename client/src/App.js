import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavComponent from "./component/nav-component";
import HomeComponent from "./component/home-component";
// import CreateComponent from "./component/create-component";
import FooterComponent from "./component/footer-component";
import "./style/style.css";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        {/* <Route path="/create" element={<CreateComponent />} /> */}
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
