import React from "react";
import ArrowButton from "./Button/ArrowButton";
import FeatureCard from "./Features/FeatureCard";
import {content} from "./objectContentsData";
const Features =()=>{

  const renderCard=()=>{

    return (content[0].featureCard.map((feature,index)=>{
      console.log(feature.img);
      return(<FeatureCard
      img={feature.img}
      classFeatureCard="feature"
      content={feature.contentCard}
      title={feature.title}/>);
    }));
  }
  return(
    <div className="features">

    <div className="features__item">

    <div className="features__image"></div>
    <div className="features__main-title">
    <h2 className="header-large-2">Features</h2>
    <p className=" features__text text-body ">
    We make sure all of our features are designed to be loved by every aspiring and even
    professional photograpers who wanted to share their stories.
    </p>
    </div>

    </div>

    <div className="features__content">

    {renderCard()}

    </div>
    <div className="features__invite-postcard">
    <h1 className="features__second-title header-large-1">We're in Beta. Get your invite today!</h1>
    <ArrowButton classButton=" btn features__btn btn__color--white" text="Get an invite" classArrow="arrow--white"/>
    </div>


    </div>
  )
}

export default Features;
