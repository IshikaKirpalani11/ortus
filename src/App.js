import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Page1 from "./Page1";   
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";   // 👈 added Page4

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} /> {/* 👈 added this route */}
      </Routes>
    </Router>
  );
}

export default App;
