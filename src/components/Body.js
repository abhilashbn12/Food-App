import { useState, useEffect } from "react"
import { restaurantsList } from "../Contact"
import RestaurantCard from "./RestaurantCard"

function filter(search, restaurants) {
    const filterData = restaurants.filter((restaurant) => (restaurant.info.name.includes(search)));
    return filterData;
}


const Body = () => {
    const [search, setSearch] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantsList);

    useEffect(() => {
        // console.log("render()");
        getRestaurant();
    }, [])

    async function getRestaurant() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
    }

    function handlerChange(e) {
        setSearch(e.target.value)
    }
    return (
        <>
            <div className="search-container">
                <input type="text" className="search-input" value={search} onChange={handlerChange} placeholder="Search" />
                <button className="search-btn" onClick={() => { const data = filter(search, restaurants); setRestaurants(data) }}>Search</button>
            </div>
            <div className="Restraunt-list">
                {
                    restaurants.map((restaurant) => {
                        return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
                    })
                }
            </div>
        </>
    )
}

export default Body;