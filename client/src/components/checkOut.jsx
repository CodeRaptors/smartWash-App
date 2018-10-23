import React from 'react';
import Payment from './payment.jsx';

//receipt

const CheckOut = (props) => {
 return (
   <div>
     <h2>Tu orden</h2>
     <p>Recogeremos {this.props.state.size} de ropa</p>
     <p>el día{this.props.state.dates} a las {this.props.state.times}.</p>
     <p></p>
     <p>Total</p>
         <Payment />
  </div>
 );
}

export default CheckOut;
