import React from "react";
import Introductory from "./Introduce/Introductory";
import ArrowButton from "./Button/ArrowButton";
import PricingCard from "./Pricing/PricingCard";
import PricingTabRow from "./Pricing/PricingTabRow";
import Switch from "./Button/Switch";
import check from "../assets/pricing/desktop/check.svg";
import { priceCard } from "../Objects/pricingObj";

const Pricing = () => {
  const tabRowItems=[{
    title:"Unlimited Story posting",
    numCheck:"3"
  },{
    title:"Unlimited Photo upload",
    numCheck:"3"
  },{
    title:"Embedding Custom Content",
    numCheck:"2"
  },{
    title:"Customize Metadata",
    numCheck:"2"
  },{
    title:"Advanced Metrics",
    numCheck:"1"
  },{
    title:"Photo Downloads",
    numCheck:"1"
  },{
    title:"Search Engine Indexing",
    numCheck:"1"
  },{
    title:"Custom Analytics",
    numCheck:"1"
  }]
  return (
    <section className="pricing" id="Pricing">
      <Introductory title="Pricing" imgClass="pricing__image">
        Create a your stories, Photosnap is a platform for photographers and
        visual storytellers. It’s the simple way to create and share your
        photos.
      </Introductory>

      <Switch
      classSwitch=""
      classButton="btn__switch"
      classCheck="btn__switch--checkbox"
      idToggle="switch-toggle"
      />
      <div className="pricing__cards">

        {priceCard.map((card, index) => (
          <PricingCard
            key={index}
            title={card.title}
            price={`$${card.price.toFixed(2)}`}
            text={card.text}
            id={index + 1}
            subscribe={card.subscribe}
          />
        ))}

      </div>
      <div className="pricing__list">
        <div className=" header-large-2 pricing__list--title">Compare</div>
        <div className="pricing__list--row">
          <div className="pricing__list--col-1 header-4">The Features</div>
          <div className="pricing__list--mobile-title">
            <span className="header-4 pricing__list--main-title">Basic</span>
            <span className="header-4  pricing__list--main-title  ">Pro</span>
            <span className="header-4  pricing__list--main-title ">Business</span>
          </div>
        </div>
        {
          tabRowItems.map(item=>{
            return <PricingTabRow mainTitle={item.title} numCheck={+item.numCheck} />
          })
        }

      </div>
      <div className="invite-postcard">
        <h1 className="invite-postcard__second-title header-large-1">
          We're in Beta. Get your invite today!
        </h1>
        <ArrowButton
          classButton=" btn invite-postcard__btn btn__color--white"
          text="Get an invite"
          classArrow="arrow--white"
        />
      </div>
    </section>
  );
};
export default Pricing;
