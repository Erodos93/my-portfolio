import React from "react";
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Invite from "./components/Modal/Invite";
import Stories from "./components/Stories";
import Features from "./components/Features";
import Pricing from "./components/Pricing";

import Footer from "./components/Footer/Footer";

const App = ()=> {

  return (
    <Router>


    <div className="container">
    <Invite/>
    <Header/>
    <Switch>
    <Route exact path="/">
    <Redirect to="/home" />
    </Route>
    <Route path="/home">
    <Home/>
    </Route>

    <Route path="/stories">
    <Stories/>
    </Route>

    <Route path="/features">
    <Features/>
    </Route>
    <Route path="/pricing">
    <Pricing/>
    </Route>
    </Switch>

    <Footer/>
    </div>

    </Router>
      );
}

export default App;
