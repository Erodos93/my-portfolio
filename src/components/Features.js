import React from "react";
import ArrowButton from "./Button/ArrowButton";
import FeatureCard from "./Features/FeatureCard";
import Introductory from "./Introduce/Introductory";
import { content } from "../Objects/objectContentsData";
const Features = () => {
  const renderCard = () => {
    return content[0].featureCard.map((feature, index) => {
      console.log(feature.img);
      return (
        <FeatureCard
          key={index}
          img={feature.img}
          classFeatureCard="feature"
          content={feature.contentCard}
          title={feature.title}
        />
      );
    });
  };
  return (
    <div className="features">
      <Introductory title="Features" imgClass="features__image">
        We make sure all of our features are designed to be loved by every
        aspiring and even professional photograpers who wanted to share their
        stories.
      </Introductory>
      <div className="features__content">{renderCard()}</div>
      <div className="invite-postcard">
        <h1 className="invite-postcard__second-title header-large-1">
          We're in Beta. Get your invite today!
        </h1>
        <ArrowButton
          classButton=" btn features__btn btn__color--white"
          text="Get an invite"
          classArrow="arrow--white"
        />
      </div>
    </div>
  );
};

export default Features;
