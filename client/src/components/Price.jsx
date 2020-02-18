import React from "react";

const Price = props => {
  return (
    <div id="price" className="a-section a-spacing-small">
      <img
        className="choice"
        src="http://descriptions-env.62m3r6bcww.us-east-2.elasticbeanstalk.com/images/amazonchoice.png"
      ></img>
      <table className="a-lineitem">
        <tbody>
          <tr id="priceblock_ourprice-row">
            <td
              id="priceblock_ourprice_lbl"
              className="a-color-secondary a-size-base a-text-right a-nowrap"
            >
              Price:{" "}
            </td>
            <td className="a-span12">
              <span
                id="priceblock_ourprice"
                className="a-size-medium a-color-price priceBlockBuyingPriceString"
              >
                <span>${props.price} </span>
              </span>
              <span id="oourprice_shippingmessage">
                <span>
                  & {<strong>Free Shipping</strong>}.
                  <a
                    href="#FreeShipping"
                    title="FREE Next Day Pickup"
                    data-toggle="popover"
                    data-placement="bottom"
                    data-content="Free Next Day Pickup on qualifying orders. See shipping options in checkout."
                  >
                    {" "}
                    Details
                  </a>{" "}
                  &
                </span>
                <span>
                  <a
                    href="#FreeReturns"
                    title="Return this item for free"
                    data-toggle="popover"
                    data-placement="bottom"
                    data-content="You can return this item for any reason and get a full refund: no shipping charges. 
                    The item must be returned in new and unused condition"
                  >
                    {" "}
                    Free Returns
                  </a>
                </span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Price;
