import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter as Link, Navigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import Experienceheader from "../Experience-header/Experience-header";
import Experience from "../Experience/Experience"
import Scrollindicator from "../Scrollindicator/Scrollindicator"

function App({ children }) {
      // Preloader state with loaded
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // The wait timer for the preloader
    setTimeout(() => {
      setLoaded(true);
    }, 500);

  }, [])

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // dark mode
    console.log("Dark mode")
  }

    // Routing
  return (
    <>
      <Preloader loaded={loaded} />
      <div>

        <Navbar />
        <Scrollindicator />
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Navigate replace to="/home" />} />


            <Route path="/home" element={
              <>
                <Header />
                <Home />
                <Experienceheader />
                <Experience />
              </>
            }>
            </Route>

            <Route path="/animation" element={
              <>
              </>
            }>
            </Route>

            <Route path="*" element={<Navigate replace to="/" />} />


          </Routes>
        </BrowserRouter>,
        
        <Footer />

      </div>
    </>
  );
}

export default App;
