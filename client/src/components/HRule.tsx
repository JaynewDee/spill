import React from "react";
import { IconType } from "react-icons";

const HRule = (Icon: IconType) => (props: {}) => {
  return (
    <div className="horizontal-rule">
      <p className="left-rule"></p>
      <Icon className="icon" size={"1.66rem"} />
      <p className="right-rule"></p>
    </div>
  );
};

export default HRule;
