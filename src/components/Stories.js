import React from "react";
import CollageItem from "./Collage/CollageItem";
import ArrowButton from "./Button/ArrowButton";
import { imageCollage } from "../Objects/objectCollageData";

const Stories = () => {
  return (
    <section className="stories" /*style={{display:"none"}}*/>
      <div className="stories__item">
        <div className="stories__title-photo"></div>
        <div className="stories__main-title">
          <h4 className="header-4">Last month's featured story</h4>
          <h1 className="header-large-1 stories__main-title--header">
            Hazy full moon of Appalachia
          </h1>
          <span>
            March 2nd 2020<strong> by John Appleseed</strong>
          </span>

          <p className="text-body stories__main-title--desc">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>
          <ArrowButton
            classButton="header-4 btn btn__active stories__btn  btn__color--white"
            text="Read the Story"
            classArrow="arrow--white"
          />
        </div>
      </div>
      <div className="stories__big-collage">
        {imageCollage.map((image, index) => {
          return (
            <CollageItem
              id={image.id}
              key={index}
              date={image.date}
              altCollageImage={image.alt}
              title={image.title}
              nameUser={image.user}
              classItemImg="stories__big-collage"
            />
          );
        })}
      </div>
    </section>
  );
};
export default Stories;
