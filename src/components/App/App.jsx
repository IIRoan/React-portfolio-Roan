import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter as Navigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import Error from "../Error/Error";
import Experienceheader from "../Experience-header/Experience-header";
import Experience from "../Experience/Experience"
import Scrollindicator from "../Scrollindicator/Scrollindicator"
import { ThemeContext } from '../../styles/ThemeContext';

function App() {
  // Preloader state with loaded
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // The wait timer for the preloader
    setTimeout(() => {
      setLoaded(true);
    }, 500);

  }, [])


  // Routing
  return (
    <>
      <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
          <Preloader loaded={loaded} />
          <div>

            <Navbar />
            <Scrollindicator />
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
            <BrowserRouter>
              <Routes>

                <Route path="/" element={
                  <>
                    <Header />
                    <Home />
                    <Experienceheader />
                    <Experience />
                  </>
                }>
                </Route>
                <Route path="*" element={<Error />} />
              </Routes>
            </BrowserRouter>,

            <Footer />

          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
