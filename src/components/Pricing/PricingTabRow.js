import React from "react";
import check from "../../assets/pricing/desktop/check.svg";

const PricingTabRow = ({mainTitle,numCheck}) => {

  const items=[];

    for (var i = 0; i < +numCheck; i++) {
      items.push(<span className="check--item">
      <img src={check} alt="" />
      </span>)
    }
console.log(items);
  return (
    <div className="pricing__list--row">
      <div className="pricing__list--col-1 header-4">
        {mainTitle}
      </div>
      <div className="pricing__list--col-2">
      <div className="pricing__list--mobile-title">
        <span className="header-4 pricing__list--main-title">Basic</span>
        <span className="header-4 pricing__list--main-title">Pro</span>
        <span className="header-4 pricing__list--main-title">Business</span>
      </div>
      <div className="pricing__list--mobile-title check--box">
      {items}
      </div>
      </div>
    </div>
  );
};
export default PricingTabRow;
