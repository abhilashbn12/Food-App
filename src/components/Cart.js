import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../Contact';
import RestaurantMenu from './RestaurantMenu';
import { emptyCart, removeItem } from '../utils/CartSlice';
import { Link } from 'react-router-dom';


const Cart = () => {
    // const [total, seTotal] = useState(0);
    const cart = useSelector((Store) => Store.cart.items);
    // console.log(cart);
    const dispatch = useDispatch();
    const handleClear = (cart) => {
        dispatch(emptyCart(cart))
    }

    const handleRemove = (itemId) => {
        dispatch(removeItem(itemId))
    }

    const totalPrice = cart.reduce((total, item) => total + (item.price || item.defaultPrice) / 100, 0);


    return cart.length == 0 ? <div className='min-h-screen flex justify-center p-4 m-4'>
        <div>
            <h1 className='font-bold text-4xl p-4'>Your Cart is Empty !</h1>
            <span className='p-4'>Click here to Order
                <Link to='/'> <button className='bg-blue-100 rounded-md p-1 hover:bg-blue-200'>Home</button></Link></span>
        </div>
    </div> : (
        <div className='flex justify-between'>
            <div className='min-h-screen p-4'>
                <h1 className='font-bold text-xl'>Your Cart</h1>

                {cart.map((cartItem) => {
                    {/* console.log(cartItem); */ }
                    return (
                        <div key={cartItem.id} className='border border-solid flex justify-between items-center'>
                            <RestaurantMenu {...cartItem} key={cartItem.id} />
                            <button className='bg-red-300 rounded-md w-16 h-10 mr-1 items-center hover:bg-red-400' onClick={() => handleRemove(cartItem.id)}>Remove</button>
                        </div>
                    )
                })}
            </div>
            <div className="w-80 h-60 p-2 m-2 border border-solid shadow-lg">
                <h1 className="font-bold text-2xl">Cart Summary</h1>
                <h1 className="font-bold p-2 m-2">Toatal Qty Added: {cart.length} </h1>
                <h1 className="font-bold p-2 m-2">Toatal Amount: {Math.round(totalPrice)} </h1>
                <button className='bg-green-300 rounded-md w-44 my-2 mx-12 h-10 mr-1 items-center content-center hover:bg-green-400'>Check Out</button>
            </div>
        </div>
    )
}

export default Cart;