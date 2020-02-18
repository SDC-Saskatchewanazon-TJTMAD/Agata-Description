import React from "react";

const Title = props => {
  // maps over title prop and returns the productName from the db
  // imports Rating component

  return (
    <div>
      <div>
        <div>
          <h1 id="tittle" className="a-size-large a-spacing-none">
            {props.title}
          </h1>
        </div>
      </div>
      <div className="company-line">
        <h6>
          by <a href="#Company">Company Name</a>
        </h6>
      </div>
    </div>
  );
};

export default Title;
