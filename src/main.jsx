import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/navbar/Navbar";
import Body from "./assets/body/Body";
import Experience from "./assets/experience/Experience";
import Footer from "./assets/footer/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Router>
      <Footer />
    </ChakraProvider>
  </React.StrictMode>
);
