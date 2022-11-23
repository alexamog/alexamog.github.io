import "../public/main.css";
import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/navbar/Navbar";
import Intro from "./assets/intro/Intro";
import Experience from "./assets/experience/Experience";
import Footer from "./assets/footer/Footer";
import Projects from "./assets/projects/Projects";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ChakraProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
    <Footer />
  </ChakraProvider>
  // </React.StrictMode>
);
