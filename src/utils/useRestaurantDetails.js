import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_DETAILS } from "../Contact";

const useRestaurantDetails = (id) => {
    const [restaurant, setRestaurant] = useState(null);
    const [restaurants, setRestaurants] = useState(null);

    useEffect(() => {
        getRestaurant();
    })

    async function getRestaurant() {
        const data = await fetch(FETCH_RESTAURANT_DETAILS + id);
        const jsonData = await data.json();
        setRestaurant(jsonData.data?.cards[0]?.card?.card?.info);
        setRestaurants(jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);

    }
    return [restaurant, restaurants];

}

export default useRestaurantDetails;