import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FETCH_RESTAURANT_DETAILS, IMG_CDN_URL } from "../Contact";
import Shimmer from "./Shimmer";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import { addItems, totalPrice } from "../utils/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantDetails = () => {
    const { id } = useParams();
    const [restaurant, restaurants1, restaurants2] = useRestaurantDetails(id);

    const dispatch = useDispatch();
    const handleItems = (restaurantList) => {
        dispatch(addItems(restaurantList));
    }

    const items = useSelector((Store) => Store.cart.items);
    const totalPrice = items.reduce((total, item) => total + (item.price || item.defaultPrice) / 100, 0)

    return (!restaurant) ? <Shimmer /> : (
        <div className="RestaurantDetails flex">
            <div className="p-2 m-2 border border-solid shadow-lg h-fit fixed w-80">
                <h1 className="font-bold text-2xl">{restaurant?.name}</h1>
                <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} className="h-72 w-80" />
                <div className="flex justify-between">
                    <div>
                        <h1>{restaurant?.cuisines}</h1>
                        <h1>{restaurant?.costForTwoMessage}</h1>
                        <h1>{restaurant?.areaName}</h1>
                        <h1>{restaurant?.city}</h1>
                    </div>
                    <h1>{restaurant?.avgRating + "⭐"}</h1>
                </div>

            </div>
            <div className="ml-[350px] border border-solid px-4 my-2 h-fit overflow-scroll shadow-xl">
                <h1 className="font-bold text-2xl font-sans p-2">Menu</h1>
                <ul>
                    {restaurants1 && Object.values(restaurants1) ? (restaurants1 && Object.values(restaurants1).map((restaurantMenu) => {
                        return (
                            <div className="border justify-between items-center border-solid p-1 flex shadow-md" key={restaurantMenu?.card?.info?.id}>
                                <RestaurantMenu {...restaurantMenu?.card?.info} />
                                <button className="bg-green-100 h-10 w-16 rounded-md hover:bg-green-200" onClick={() => { handleItems(restaurantMenu?.card?.info) }}>+ Add</button>
                            </div>
                        )
                    })) :
                        (restaurants2 && Object.values(restaurants2).map((restaurantMenu) => {
                            return (
                                <div className="flex justify-between border border-solid p-1 items-center shadow-md" key={restaurantMenu?.card?.info?.id}>
                                    <RestaurantMenu {...restaurantMenu?.card?.info} />
                                    <button className="bg-green-100 h-10 w-16 rounded-md hover:bg-green-200" onClick={() => handleItems(restaurantMenu?.card?.info)}>+ Add</button>
                                </div>
                            )
                        }))
                    }
                </ul>
            </div >
            <div className="w-80 h-60 p-2 m-2 border border-solid shadow-lg">
                <h1 className="font-bold text-2xl">Cart Summary</h1>
                <h1 className="font-bold p-2 m-2">Toatal Qty Added: {items.length} </h1>
                <h1 className="font-bold p-2 m-2">Toatal Amount: {Math.round(totalPrice)} </h1>
                <Link to='/cart'><button className="outline outline-offset-2 outline-blue-500 rounded-md hover:bg-slate-100 font-extrabold block m-auto p-2">Check Out</button></Link>
            </div>
        </div >
    )
}

export default RestaurantDetails;