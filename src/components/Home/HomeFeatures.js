import React from "react";
import ItemMainContent from "./ItemMainContent";
import { content } from "../../Objects/objectContentsData";
import FeatureCard from "../Features/FeatureCard";
import HomeCollage from "../Collage/HomeCollage";
const HomeFeatures = () => {
  const renderFeatureCard = () => {

    return content[0].featureCard.map((feature, index) => {
      return index < 3 ? (
        <FeatureCard
          img={feature.img}
          classFeatureCard="home-feature"
          content={feature.contentCard}
          title={feature.title}
        />

      ) : (
        ""
      );
    });
  };
  const renderHome=()=>{

      return content.map((object, index) => {
        return (
          <ItemMainContent
            id={index + 1}
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
        );
      })
    };

  return <main className="home">
    <div className="home__features">
    {renderHome()}
    </div>
     <HomeCollage />
      <div className="features__list">
        {renderFeatureCard()}
      </div>
    </main>
};
export default HomeFeatures;
