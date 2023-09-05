const Title = () => (
    <a href="/">
        <img alt="logo" className="logo" src="https://i.pinimg.com/originals/1c/a8/89/1ca8892d1bed060a09e584b3b2cac04b.png" />
    </a>
);


const Header = () => {
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
        </div>
    )
}

export default Header;