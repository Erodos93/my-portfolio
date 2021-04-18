import React from "react";
const Introductory=({title,children,imgClass})=>{
  return(<div className="introductory__item">

  <div className={`introductory__image ${imgClass}`}></div>
  <div className="introductory__main-title">
  <h2 className="header-large-2">{title}</h2>
  <p className=" introductory__text text-body ">
{children}
  </p>
  </div>

  </div>);
}
export default Introductory;
