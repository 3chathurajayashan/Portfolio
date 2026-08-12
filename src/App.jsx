import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/HomePage/Home";
import FirstPage from "./Components/FisrtPage";
import ContactPage from "./Components/HomePage/ContactPage";
import Project from "./Components/HomePage/Project";
import AboutMe from "./Components/HomePage/AboutMe";
import Experience from "./Experience";
import OnGoing from "./Components/Projects/OnGoing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/on-projects" element={<OnGoing />} />

      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
}

export default App;
