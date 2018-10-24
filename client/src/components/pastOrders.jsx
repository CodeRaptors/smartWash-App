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




// <div className ="todoListMain">
//   <input type="text" value={this.state.value1} />
//   <button className="btn btn-primary">Submit</button>
//   <p>HELLO</p>
// </div>
// );
// }
// }





// import React from 'react';
//
//
// //página con la información de tus órdenes pasadas
//
// const MisOrdenes = (props) => {
//  return (
//    <div>
//      <h2>Tus órdenes pasadas</h2>
//      <p></p>
//      <p></p>
//      <p></p>
//
//
//   </div>
//  );
// }
//
// export default MisOrdenes;
