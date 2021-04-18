import React from "react";

const FeatureCard =({img,classFeatureCard,content,title})=>{
  return  ( <div className={`${classFeatureCard}`}>
    <img src={img} alt="" className={`${classFeatureCard}__image `}/>
    <h3 className={`${classFeatureCard}__header header-3`}>{title}</h3>
    <p className={`${classFeatureCard}__text text-body`}>
    {content}
    </p>
    </div>);
}
export default FeatureCard;
