import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_DETAILS } from "../Contact";

const useRestaurantDetails = (id) => {
    const [restaurant, setRestaurant] = useState(null);
    const [restaurants1, setRestaurants1] = useState(null);
    const [restaurants2, setRestaurants2] = useState(null);
    // console.log(restaurants);

    useEffect(() => {
        getRestaurant();
    }, [])

    async function getRestaurant() {
        const data = await fetch(FETCH_RESTAURANT_DETAILS + id);
        const jsonData = await data.json();
        setRestaurant(jsonData.data?.cards[2]?.card?.card?.info);
        setRestaurants1(jsonData.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        setRestaurants2(jsonData.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);

    }
    return [restaurant, restaurants1, restaurants2];
}

export default useRestaurantDetails;