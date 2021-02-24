import React from "react";
import ArrowButton from "../Button/ArrowButton";

const ItemMainContent =({srcDesk,srcTab,srcMob,text,title,alt,classButton,textButton,id,classItemPosition,classArrow})=>{

  return (
    <div className={`home__item home__item--${id} ${classItemPosition} `}>
    <div className={`home__content home__content--${id}`}>
    <h1 className={`home__content--header header-large-1`}>{title}</h1>
    <p className={`home__content--text home__item--text-${id} text-body`}>{text}</p>
    <ArrowButton className={classButton} text={textButton} classArrow={classArrow}/>
    </div>
    <div className={`home__img home__img--${id}`} ></div>
    </div>
  )
}
export default ItemMainContent;
