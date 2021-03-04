import React from "react";
import ItemMainContent from "./Home/ItemMainContent";
import HomeCollage from "./Collage/HomeCollage";
import HomeFeatures from "../components/Home/HomeFeatures";
import {content} from "./objectContentsData";
const Home =()=>{
  return(
    <>
    <main className="home" id="home">
    {content.map((object,index)=>{
      return <ItemMainContent
        id={index+1}
        key={index}
        srcDesk={object.srcDesktop}
        srcTab={object.srcTablet}
        srcMob={object.srcMobile}
        title={object.title}
        text={object.text}
        classItemPosition={object.classItemPosition}
        classButton={object.classButton}
        classArrow={object.classArrow}
        textButton={object.textArrowButton}
        />
    })}
   </main>
   <HomeCollage/>
   <HomeFeatures />
   </>
 );
}
export default Home;
