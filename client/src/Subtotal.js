import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

function Subtotal() {
  
  const [{ basket ,user}] = useStateValue();
  const getBasketTotal = (basket) => {
    return basket.reduce((amount, item) => item.price + amount, 0);
  };

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
       <Link to={ user? '/payment':'/login'  }>
          <button>Proceed to Checkout</button>

       </Link>
     
    </div>
  );
}

export default Subtotal;


// import React from 'react'
// import "/Subtotal.css"
// import CurrencyFormat from 'react-currency-format'

// function Subtotal() {
//   return (
//     <div>
//         <CurrencyFormat
//         renderText={(value) => (
//             <div>
//                 <p>
//                     Subtotal (0 items): <strong>0</strong>
//                 </p>
//                 <small className='subtotal__gift'>
//                     <imput type="checkbox">This order contains a gift</imput>
//                 </small>
//                 <div/>
//     )}
//     decimalScale={2}
//     value={0}
//     displayType={'text'}
//     thousandSeparator={true}
//     perfix={'$'}
    
              

//     </div>
//   )
// }

// export default Subtotal