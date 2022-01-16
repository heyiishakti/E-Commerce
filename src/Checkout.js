import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{cart},dispatch]= useStateValue();
        return (
        <div className='checkout'>
          <div className='checkout_left'>
              <img className='checkout_ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/katariy/BAU/OP_Dec/D24582943_IN_WL_Category_Page_1500x400.gif' alt=''/>
              
              <div><h2 className='checkout_title'>Your Cart</h2>
              
              {cart.map(item => (
                  <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  />
              ))
             
              }
              </div>
              </div>
              <div className='checkout_right'>
                  <Subtotal/>
              </div>
        </div>
        
    )
}

export default Checkout
