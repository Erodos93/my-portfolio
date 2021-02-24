import React from "react";
import arrow from "../../assets/shared/desktop/arrow.svg"

const ArrowButton =({text,className,classArrow,classTitle})=>{
  return <button className={className}><span className={`header-4 ${classTitle?classTitle:""}`}>{text}</span></button>
}
export default ArrowButton;
