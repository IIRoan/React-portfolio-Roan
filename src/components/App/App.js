import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import Error from "../Error/Error";
import Preloader from "../Preloader/Preloader";
import Projects from "../Projects/Projects";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import Experienceheader from "../Experience-header/Experience-header";
import Experience from "../Experience/Experience"
import Scrollindicator from "../Scrollindicator/Scrollindicator"
import Showcaseheader from "../Showcaseheader/Showcaseheader"

function App({ children }) {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {

    setTimeout(() => {
      setLoaded(true);
    }, 500);

  }, [])

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // dark mode
    console.log("Dark mode")
  }


  return (
    <>
      <Preloader loaded={loaded} />
      <div>

        <Navbar />
        <Scrollindicator />
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />

        <BrowserRouter>

          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to="/home" />;
              }}
            />

            <Route path="/home">
              <Header />
              <Home />
              <Experienceheader />
              <Experience />
            </Route>

            <Route path="/Projects">
              <Projects />
            </Route>

            <Route path="/Showcase">
              <Showcaseheader />
              <Home />
            </Route>

            <Route exact path="/" component={Home} />
            <Route component={Error} />

          </Switch>
          <Footer />
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
