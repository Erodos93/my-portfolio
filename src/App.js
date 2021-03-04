import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Invite from "./components/Modal/Invite";
import Stories from "./components/Stories";
import Features from "./components/Features";
// import InviteForm from "./components/Modal/InviteForm";

import Footer from "./components/Footer/Footer";

const App = ()=> {

  return (
    <Router>


    <div className="container">
    <Invite/>
    <Header/>

    <Route path="/home">
    <Home/>
    </Route>

    <Route path="/stories">
    <Stories/>
   </Route>

   <Route path="/features">
   <Features/>
   </Route>

    <Footer/>
    </div>

    </Router>
      );
}

export default App;
