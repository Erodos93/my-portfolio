import React from "react";
import arrow from "../../assets/shared/desktop/arrow.svg"

const ArrowButton =({text,classButton,classArrow,classTitle})=>{
  return <button  className={classButton}><span className= {classTitle?classTitle:""}>{text}</span></button>
}
export default ArrowButton;
