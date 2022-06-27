import React from "react";
import { GiOwl } from "react-icons/gi";
const HRule = () => {
  return (
    <div className="horizontal-rule">
      <p className="left-rule"></p>
      <GiOwl className="icon" size={"1.66rem"} />
      <p className="right-rule"></p>
    </div>
  );
};

export default HRule;
