import { useState } from "react";

const Title = () => (
    <a href="/">
        <img alt="logo" className="logo" src="https://i.pinimg.com/originals/1c/a8/89/1ca8892d1bed060a09e584b3b2cac04b.png" />
    </a>
);


const Header = () => {
    const [isLoggedIn, setLoggedIN] = useState(false);
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            {(isLoggedIn == true ? <button onClick={() => { setLoggedIN(false) }}>Logout</button> : <button onClick={() => { setLoggedIN(true) }}>Login</button>)}


        </div>
    )
}

export default Header;