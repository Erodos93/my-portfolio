import React from "react";
import CollageItem from "./Collage/CollageItem";
import {imageCollage} from "./Collage/objectCollageData";

const Stories =()=>{
  return<section className="stories" id="stories">
  <div className="stories__title-photo">
  <div className="stories__main-title">
  <h4 className="header-4">Last month's featured story</h4>
  <h1 className="header-large-1 stories__main-title--header">Hazy full moon of Appalachia</h1>
  March 2nd 2020
  by John Appleseed

  <p className="text-body stories__main-title--desc">The dissected plateau area, while not actually made up of geological mountains,
  is popularly called "mountains," especially in eastern Kentucky and West Virginia,
  and while the ridges are not high, the terrain is extremely rugged.</p>
  </div>
  </div>
  <div className="stories__big-collage">

  {imageCollage.map((image,index)=>{
    return (index>3?<CollageItem
    id={image.id}
    key={index}
    date={image.date}
    altCollageImage={image.alt}
    title={image.title}
    nameUser={image.user}
    classItemImg="stories__big-collage"
    />:"");
  })}
  </div>

  </section>
}
export default Stories;
