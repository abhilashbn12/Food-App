import { useState, useContext, createContext } from "react";
import foodie from '../assets/img/foodie.png';
import { Link } from 'react-router-dom';
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Store from "../utils/Store";

const Title = () => (
    <a href="/">
        <img alt="logo" className="h-16 p-1" src={foodie} />
    </a>
);


const Header = () => {
    const [isLoggedIn, setLoggedIN] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user } = useContext(UserContext);
    const cartItems = useSelector((Store) => Store.cart.items);
    // console.log(cartItems);
    return (
        <div className=" flex justify-between bg-white shadow-lg">
            <Title />
            <div className="nav-items ">
                <ul className="flex py-6 ">
                    <li><Link to='/' className=" px-6 ">Home</Link></li>
                    <li><Link to='/about' className=" p-6 ">About Us</Link></li>
                    <li><Link to='/contact' className=" p-6 ">Contact Us</Link></li>
                    <li><Link to='/instaMart' className=" p-6 ">InstaMart</Link></li>
                    <li><Link to='/cart' className=" p-6 ">Cart {cartItems.length} items</Link></li>
                </ul>
            </div>

        </div>


    )
}

export default Header;