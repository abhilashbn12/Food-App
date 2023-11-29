import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Contact";
import Shimmer from "./Shimmer";
const RestaurantDetails = () => {
    const [restaurant, setRestaurant] = useState(null);
    const [restaurants, setRestaurants] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getRestaurant();
    }, [])


    async function getRestaurant() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" + id);
        const jsonData = await data.json();
        // console.log(jsonData);
        setRestaurant(jsonData.data?.cards[0]?.card?.card?.info);
        setRestaurants(jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    }


    return (!restaurants) ? <Shimmer /> : (
        <div className="RestaurantDetails">
            <div>
                <h1>{id}</h1>
                <h1>{restaurant?.name}</h1>
                <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
                <h1>{restaurant?.cuisines}</h1>
                <h1>{restaurant?.costForTwoMessage}</h1>
                <h1>{restaurant?.avgRating}</h1>
                <h1>{restaurant?.areaName}</h1>
                <h1>{restaurant?.city}</h1>
            </div>
            <div >
                <h1>Menu</h1>
                <ul>
                    {Object.values(restaurants).map((restaurantMenu) => {
                        return (<li key={restaurantMenu?.card?.info?.id}>{restaurantMenu?.card?.info?.name}</li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantDetails;