import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FETCH_RESTAURANT_DETAILS, IMG_CDN_URL } from "../Contact";
import Shimmer from "./Shimmer";
import useRestaurantDetails from "../utils/useRestaurantDetails";

const RestaurantDetails = () => {
    const { id } = useParams();
    const [restaurant, restaurants] = useRestaurantDetails(id);

    return (!restaurant) ? <Shimmer /> : (
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
                    {restaurants && Object.values(restaurants).map((restaurantMenu) => {
                        return (<li key={restaurantMenu?.card?.info?.id}>{restaurantMenu?.card?.info?.name}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantDetails;