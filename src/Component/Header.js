import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../App';

function Header() {
    const {totalItem}=useContext(CartContext)
    return (
        <>
            <header>
                <div className='left_side_nav'>
                    <i className=" fa fa-solid fa-arrow-left"></i>
                    <p>Continue Shopping</p>
                </div>
                <div className='right_side_nav'>
                    <ShoppingCartIcon className='cart_img ' />
                    <span className="cart_count">
                        <p style={{ margiTop: "2.5px" }}>{totalItem}</p>
                    </span>
                </div>
            </header>
            <hr />
        </>
    )
}

export default Header