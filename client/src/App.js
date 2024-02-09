import React from "react";
import { Routes, Route } from "react-router-dom";
import NavComponent from "./component/nav-component";
import HomeComponent from "./component/home-component";
import FooterComponent from "./component/footer-component";
import CardDetailComponent from "./component/cardDetail-component";
import "./style/style.css";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/:id" element={<CardDetailComponent />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
