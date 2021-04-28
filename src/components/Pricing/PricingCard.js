import React from "react";

const PricingCard = ({ id, title, text, price, subscribe }) => {
  return (
    <div className={`pricing__card pricing__card--${id}`}>
    <div className="pricing__container">
    <div>
    <h2 className="header-2">{title}</h2>
    <p className="text-body">{text}</p>
    </div>
    <div className="price__title">
    <h2 className="price header-large-2">{price}</h2>
    <h4 className="header-4">{subscribe}</h4>
    </div>
    </div>
    <button className="btn__dark  header__btn text-body">Pick plan</button>
    </div>
  );
};
export default PricingCard;

