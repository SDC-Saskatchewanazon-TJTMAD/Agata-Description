import React from "react";

// maps over descrition prop and returns the product description
const Description = props => {
  return (
    <div>
      <div className="valentines">
        <b>
          <font color="#008500">Arrives before Valentine's Day.</font>
        </b>{" "}
        Choose delivery options in checkout.
      </div>
      <div className="support">
        <a
          href="#support"
          title="What's Product Support?"
          data-toggle="popover"
          data-placement="bottom"
          data-content="In the event your product doesn’t work as expected, or you’d like someone to walk you through set-up, Amazon offers free product support over the phone on eligible purchases for up to 90 days.
           To access this option, go to Your Orders and choose Get product support."
        >
          Free Saskatchewanazon product support included
        </a>
      </div>
      <div>
        <li>{props.description}</li>
      </div>
      <div className="compare">
        <a href="#Compare">Compare with similar items</a>
      </div>
    </div>
  );
};

export default Description;
