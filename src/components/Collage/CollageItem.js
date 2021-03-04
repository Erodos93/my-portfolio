import React from "react";
import ArrowButton from "../Button/ArrowButton";


const CollageItem =({id,altCollageImage,title,nameUser,date,classItemImg})=>{
  return (
  <div className={`collage__item ${classItemImg}__item--${id}`} >
      <div alt={altCollageImage}  className={`collage__image ${classItemImg}__image--${id}`}></div>
      <div className="collage__label">
      <div className="collage__label--text">
      {date? <div className="collage__label--date text-body">{date}</div>:""}
      <h2 className="header-2 collage__item--header">{title}</h2>
      <p className="text-body">by {nameUser}</p>
      </div>
      <ArrowButton classTitle="" classButton="btn collage__btn  collage__btn--arrow btn__color--white "
      text="Read Story" />
    </div>

    </div>
    );
}
export default CollageItem;
