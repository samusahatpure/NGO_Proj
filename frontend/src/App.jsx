import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Donate from "./components/Donate";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Activities from "./components/Activities";
import Projects from "./components/Projects";
import ProjJivika from "./miniComponents/ProjJivika";
import ProjPadhai from "./miniComponents/ProjPadhai";
import ProjSehat from "./miniComponents/ProjSehat";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/proj-sehat" element={<ProjSehat/>} />
          <Route path="/proj-jivika" element={<ProjJivika/>} />
          <Route path="/proj-padhai" element={<ProjPadhai/>} />
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;
