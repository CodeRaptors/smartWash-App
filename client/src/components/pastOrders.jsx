import React from 'react';
import SingleOrder from "./singleOrder.jsx";

const MisOrdenes = (props) => (
  <div>
    { props.userOrders ?
      <div>
        {props.userOrders.map((order, id) => (
          <SingleOrder order={order} key={id}/>
        ))}
      </div>
    : <div>Aún no tienes órdenes con SmartWash</div> }
  </div>
)

export default MisOrdenes;
