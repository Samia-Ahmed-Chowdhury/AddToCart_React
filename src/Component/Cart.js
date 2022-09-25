import React, {  useContext } from 'react'
import '../style.css'
import { Scrollbars } from "react-custom-scrollbars-2";
import CardCart from './CardCart';
import Header from "./Header"
import { CartContext } from '../App';

function Cart() {
    const {item,totalItem,totalAmount,removeItem,clearCart,IncrementItem,DecrementItem} = useContext(CartContext);

    return (
        <>
            <Header />
            <section className='main_cart_section'>
                <h1>Shopping Cart</h1>
                <p className="total-items">
                    you have <span className="total-items-count">{totalItem}</span>
                    items in shopping cart
                </p>
                <div className='cart_item_container'>
                    <div className='cart_items'>
                        <Scrollbars >
                            {
                                item.map((val, index) => { 
                                    return (
                                        <CardCart key={index}{...val}
                                        removeItem={removeItem} 
                                        IncrementItem={IncrementItem}
                                        DecrementItem={DecrementItem}
                                        />
                                    )
                                }
                                )
                            }
                        </Scrollbars>
                     
                    </div>
                </div>

                <div className='row m-auto d-flex justify-content-end'>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-10 col-10 g-3 ">
              <h3>
                card total:<span> ${totalAmount}</span>
              </h3>
              <button className='clear' onClick={clearCart}>Clear Cart</button>
              <button className='check_out' >CheckOut</button>
            </div>
          </div>

            </section>
        </>
    )
}

export default Cart