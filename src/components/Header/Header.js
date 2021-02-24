import React from "react";
import logo from "../../assets/shared/desktop/logo.svg";
// import Invite from "../Modal/Invite";
import CheckButton from "./CheckButton";
// import {Link} from "react-router-dom";
const Header =()=>{
  const openInviteForm=()=>{
    const displayBack=document.querySelector(".invite__background");
    const displayButton=document.querySelector(".close__btn");
     displayBack.style.display="flex";
     displayButton.style.display="inline-block";
  }

  return <header className="header">
    <CheckButton classButton="menu__btn" classIcon="menu__icon" classCheck="menu__checkbox" idToggle="nav-toggle"/>
    <nav className="mobile__nav header__nav">
    <img src={logo} alt="Logo" className="mobile__logo header__logo"/>
    <div className="mobile__list header__list">
    <div className="mobile__links header__links">
    <a href="#stories" className="mobile__link mobile__link--1 header__link"><h4 className="header-4">Stories</h4></a>
    <a href="#features" className="mobile__link mobile__link--2 header__link"><h4 className="header-4">Features</h4></a>
    <a href="#pricing" className="mobile__link mobile__link--3 header__link"><h4 className="header-4">Pricing</h4></a>
    </div>

    <button onClick={openInviteForm} className="mobile__link btn__dark mobile__btn header__btn text-body">Get an invite</button>

    </div>
    </nav>


   </header>
}
export default Header;
