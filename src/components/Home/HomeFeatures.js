import React from "react";

import {content} from "../objectContentsData";
import FeatureCard from "../Features/FeatureCard";
const HomeFeatures =()=>{


  const renderCard=()=>{
    return (content[0].featureCard.map((feature,index)=>{
      return (index<3?<FeatureCard
      img={feature.img}
      classFeatureCard="home-feature"
      content={feature.contentCard}
      title={feature.title}/>:"")
    }))
  }

  return<section className="home-features">
  {renderCard()}
  </section>
}
export default HomeFeatures;
