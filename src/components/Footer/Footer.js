import React,{useState} from "react";
import logo from "./footer-logo.svg";

import ArrowButton from "../Button/ArrowButton";


const Footer =()=>{
  const iconItem=[];

  const linkName=[{name:"Home"},{name:"Stories"},{name:"Features"},{name:"Pricing"}];
  const socialIcon=["Facebook","Youtube","Twitter","Pinterest","Instagram"];
    for( var i = 1; i < 6; i++) {
            iconItem.push(<div  alt={socialIcon[i-1]} key={i} className={`footer__icon  footer__icon--${i}`}></div>);
    }

  return <footer className="footer">
  <div className="footer__menu">
  <img src={logo} alt="" className="footer__logo"/>
  <div className="footer__small-icon">

  {iconItem}
  </div>
  <nav className="footer__nav">
  {linkName.map( (link,id) => {
    console.log(link.name);
   return (<a href={`#${link.name}`} key={id} className="footer__link header-4">{link.name}</a>);
  })}
  </nav>
  <ArrowButton className=" btn  footer__btn  btn__color--white" classTitle="footer__btn--title" text="Get an invite" classArrow="arrow--white"/>
  <p className="copyright text-body">
  &copy;:Copyright 2019. All Rights Reserved</p>
  </div>
  </footer>
}
export default Footer;
