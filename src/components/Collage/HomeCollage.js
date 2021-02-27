import React from "react";
import CollageItem from "./CollageItem";
import {imageCollage} from "./objectCollageData";

const HomeCollage =()=>{


  return <div className="collage">
  {imageCollage.map((image,index) =>{
    if(image.id<5){
      return(<CollageItem
        id={image.id}
        key={index}
        altCollageImage={image.alt}
        title={image.title}
        nameUser={image.user}
        classItemImg="collage"/>)
      }else{
        return "";
      }
    }
      )}

  </div>
}
export default HomeCollage;
