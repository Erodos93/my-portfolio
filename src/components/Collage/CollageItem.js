import React from "react";
import ArrowButton from "../Button/ArrowButton";


const CollageItem =({id,altCollageImage,title,nameUser})=>{
  return (
  <div className="collage__item" id="stories">
      <div alt={altCollageImage}  className={`collage__image collage__image--${id}`}></div>
      <div className="collage__label">
      <div className="collage__label--text">
      <h2 className="header-2 collage__item--header">{title}</h2>
      <p className="text-body">by {nameUser}</p>
      </div>
      <ArrowButton classTitle="" className="btn collage__btn  collage__btn--arrow btn__color--white "
      text="Read Story" />
    </div>

    </div>
    );
}
export default CollageItem;
