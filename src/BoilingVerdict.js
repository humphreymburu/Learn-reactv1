import React from "react";

function BoilingVerdict(props) {
  if (props.celcius >= 100) {
    return <p>The Water Would Boils</p>;
  }
  return <p>The water would not boil</p>;
}

export default BoilingVerdict;
