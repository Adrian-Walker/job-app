import React from "react";
import Landing from "./pages/Landing.js";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Dashboard</div>} />
        <Route path="/register" element={<div>Register</div>} />
        <Route path="/landing" element={<div>Dashboard</div>} />
        <Route path="/" element={<div>Dashboard</div>} />
        <Landing />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
