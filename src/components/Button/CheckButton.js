import React from "react";


const CheckButton=({classButton,classIcon,classCheck,click,idToggle})=>{
  return <>
   <input onClick={click} type="checkbox" className={classCheck} id={idToggle}/>
   <label  htmlFor={idToggle} className={classButton}><span className={classIcon}></span></label>
      </>
}
export default CheckButton;
