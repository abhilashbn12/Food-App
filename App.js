import React from "react";
import ReactDOM from "react-dom/client"


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

const burgerKing = {
    name: "Burger King",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    cusines: ["Burgers", "American"],
    ratings: 4.2
}


const RestrauntCard = () => {
    return (
        <div className="card">
            <img src={burgerKing.image} />
            <h2>{burgerKing.name}</h2>
            <p>{burgerKing.cusines.join(" , ")}</p>
            <h4>{burgerKing.ratings} stars</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="Restraunt-list">
            <RestrauntCard />
            <RestrauntCard />
            <RestrauntCard />
            <RestrauntCard />
            <RestrauntCard />
            <RestrauntCard />
            <RestrauntCard />
            <RestrauntCard />
        </div>
    )
}


const Footer = () => {
    return (
        <h4>Footer</h4>
    )
}

const PageLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PageLayout />);