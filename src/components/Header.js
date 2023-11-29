import { useState } from "react";
import foodie from '../assets/img/foodie.png';
import { Link } from 'react-router-dom';

const Title = () => (
    <a href="/">
        <img alt="logo" className="logo" src={foodie} />
    </a>
);


const Header = () => {
    const [isLoggedIn, setLoggedIN] = useState(false);
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li><Link to='/' className="headerLink">Home</Link></li>
                    <li><Link to='/about' className="headerLink">About Us</Link></li>
                    <li><Link to='/contact' className="headerLink">Contact Us</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
            {(isLoggedIn == true ? <button onClick={() => { setLoggedIN(false) }}>Logout</button> : <button onClick={() => { setLoggedIN(true) }}>Login</button>)}


        </div>
    )
}

export default Header;