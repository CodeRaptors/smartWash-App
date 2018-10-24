import React from "react";

const SingleOrder = props => (
  <div>
    <span>{`${props.orders.dates} ${props.orders.service} ${props.orders.price}`}</span>
  </div>
);

export default SingleOrder;
