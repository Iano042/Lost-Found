import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Items from "./Components/Items";
import Footer from "./Components/Footer";
import PostItem from "./Components/PostItem";
import ClaimItem from "./Components/ClaimItem";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/post" element={<PostItem />} />
        <Route path="/claimItem" element={<ClaimItem />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
