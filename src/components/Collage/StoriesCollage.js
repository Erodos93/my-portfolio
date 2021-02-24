import React from "react";
import CollageItem from "./CollageItem";
import {imageCollage} from "./objectCollageData";

const StoriesCollage =()=>{


  return <div className="collage">
  {imageCollage.map((image,index) =>{
    return(<CollageItem
      id={image.id}
      key={index}
      altCollageImage={image.alt}
      title={image.title}
      nameUser={image.user}/>)})}
  </div>
}
export default StoriesCollage;
