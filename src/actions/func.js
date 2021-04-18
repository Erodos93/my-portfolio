import { priceCard } from "../Objects/pricingObj";

export const checkSwitch = function (e) {
  const priceArr = document.querySelectorAll(".price");

  if (!priceArr) console.log("error");
  priceArr.forEach((priceElement, id) => {
    const yearlyPrice = priceCard.map((priceObj, index) =>
      e.target.checked
        ? {
            ...priceObj,
            id: index,
            price: +(priceObj.price * 10),
            subscribe: "per year",
          }
        : { ...priceObj, subscribe: "per month" }
    );

    rewritePriceCard(priceElement, yearlyPrice, id);
  });
  function rewritePriceCard(priceElement, yearlyPrice, id) {
    let convertPrice = yearlyPrice[id].price.toFixed(2);
    priceElement.innerText = `$${convertPrice}`;
    priceElement.nextElementSibling.innerText = yearlyPrice[id].subscribe;
  }
};
