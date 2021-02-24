import React,{useState} from "react";
import CheckButton from "../Header/CheckButton";

const InviteForm = ({fname,lname,email})=>{
  const closeInviteForm=()=>{
    let displayBack=document.querySelector(".invite__background");
    let displayButton=document.querySelector(".close__btn");
     displayBack.style.display="none";
     displayButton.style.display="none";
  }
  return(  <form className="invite__form">
  <CheckButton click={closeInviteForm} classButton="close__btn" classIcon="close__icon" classCheck="close__checkbox" idToggle="inv-toggle"/>
  <label htmlFor="#firstName">First Name:</label>
  <input id="firstName" type="text" className="invite__input" placeholder="Write your first name..."/>
  <label htmlFor="#lastName">Last Name:</label>
  <input id="lastName" type="text" className="invite__input" placeholder="Write your last name..." />
  <label htmlFor="#email">Email:</label>
  <input id="email" type="email" className="invite__input" placeholder="Write your email..." />
  <button type="submit" className="btn__dark invite__btn text-body">Get an invite</button>
 </form>);

}
export default InviteForm;
// <div  className="close"><span className="close__icon"></span></div>
