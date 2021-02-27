import React from "react";
import logo from "../../assets/shared/desktop/logo.svg";
import CheckButton from "./CheckButton";
const Header =()=>{


  //OPEN FORM
  const openInviteForm=()=>{
    const displayBack=document.querySelector(".invite__background");
    const displayButton=document.querySelector(".close__btn");
    
     displayBack.style.display="flex";
     displayButton.style.display="inline-block";
  }

  //LINK TO STORIES
  const changePageToStories=()=>{
    const firstStoriesContent=document.querySelector(".stories__title-photo");
    const firstHomeContent=document.querySelector(".home__content--1");
    const featureHomeContent=document.querySelector(".home-features");
    const bigCollage=document.querySelector(".stories__big-collage");
    const firstHomeImg=document.querySelector(".home__item--1");
    const secondHomeImg=document.querySelector(".home__item--2");
    const thirdHomeImg=document.querySelector(".home__item--3");


    firstStoriesContent.classList.add("float__rightSide-to-center");
    firstHomeContent.classList.add("float__center-to-leftSide");
    firstHomeImg.classList.add("float__center-to-leftSide");
    bigCollage.classList.add("float__down-to-up");
    secondHomeImg.classList.add("disapere__home-item");
    thirdHomeImg.classList.add("disapere__home-item");
    featureHomeContent.style.display="none";
  }
  //LINK TO HOME
  const backToHome=()=>{
    const firstStoriesContent=document.querySelector(".stories__title-photo");
    const firstHomeContent=document.querySelector(".home__content--1");
    const featureHomeContent=document.querySelector(".home-features");
    const bigCollage=document.querySelector(".stories__big-collage");
    const firstHomeImg=document.querySelector(".home__item--1");
    const secondHomeImg=document.querySelector(".home__item--2");
    const thirdHomeImg=document.querySelector(".home__item--3");

    firstStoriesContent.classList.remove("float__rightSide-to-center");
    firstHomeContent.classList.remove("float__center-to-leftSide");
    firstHomeImg.classList.remove("float__center-to-leftSide");
    bigCollage.classList.remove("float__down-to-up");
    secondHomeImg.classList.remove("disapere__home-item");
    thirdHomeImg.classList.remove("disapere__home-item");
    featureHomeContent.style.display="grid";

  }

  return <header className="header">
    <CheckButton classButton="menu__btn" classIcon="menu__icon" classCheck="menu__checkbox" idToggle="nav-toggle"/>
    <nav className="mobile__nav header__nav">
    <img onClick={backToHome} src={logo} alt="Logo" className="mobile__logo header__logo"/>
    <div className="mobile__list header__list">
    <div className="mobile__links header__links">
    <a /*href="#stories"*/ onClick={changePageToStories} className="mobile__link mobile__link--1 header__link"><h4 className="header-4">Stories</h4></a>
    <a href="#home-features" className="mobile__link mobile__link--2 header__link"><h4 className="header-4">Features</h4></a>
    <a href="#pricing" className="mobile__link mobile__link--3 header__link"><h4 className="header-4">Pricing</h4></a>
    </div>

    <button onClick={openInviteForm} className="mobile__link btn__dark mobile__btn header__btn text-body">Get an invite</button>

    </div>
    </nav>


   </header>
}
export default Header;
