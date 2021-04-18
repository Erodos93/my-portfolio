import React from "react";
import { checkSwitch } from "../../actions/func";

const Switch = ({
  classCheck,
  idToggle,
  btn__switch,
  classButton,
  classSwitch,
}) => {
  return (
    <div className="pricing__switch">
      <h3 className="subscribe header-3">Monthly</h3>

      <input
        onClick={checkSwitch}
        type="checkbox"
        className={classCheck}
        id={idToggle}
      />
      <label htmlFor={idToggle} className={classButton}>
        <div className={classSwitch}></div>
      </label>
      <p className="subscribe text-body">Yearly</p>
    </div>
  );
};
export default Switch;
// <div className="switch"></div>
