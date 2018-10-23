import React from 'react';
import Payment from './payment.jsx';

//receipt

const CheckOut = (props) => {
 return (
   <div>
     <h2>Tu orden</h2>
     <p>Recogeremos {props.state.size} de ropa</p>
     <p>el día{props.state.dates.toLocaleDateString()} a las {props.state.times}.</p>
     <p></p>
     <p>Total</p>
         <Payment total={props.state.total}/>
  </div>
 );
}

export default CheckOut;
