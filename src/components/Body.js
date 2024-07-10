import { useState, useEffect } from "react"
import { FETCH_ALLRESTAURANTS } from "../Contact"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filter } from "../utils/Helper";
import useIsOnline from "../utils/useIsOnline";



const Body = () => {
    const [search, setSearch] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);


    useEffect(() => {
        getRestaurant();
    }, [])

    async function getRestaurant() {
        const data = await fetch(FETCH_ALLRESTAURANTS);
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    function handlerChange(e) {
        setSearch(e.target.value)
    }



    const isOnline = useIsOnline();

    if (!isOnline) {
        return <h1>Please, Check Your Internet Connection</h1>
    }

    return (allRestaurants?.length == 0 ? (<Shimmer />) : (
        <div className=" bg-gray-200 mt-2">
            <div className="search-container bg-white shadow-md pl-4 m-1 ">
                <input id="search" type="text" className="search-input p-1 m-2 bg-zinc-200 rounded-sm focus:bg-slate-200 outline-none" value={search} onChange={handlerChange} placeholder="Search" />
                <button className="search-btn p-2 m-2 bg-blue-600 text-white rounded-md hover:bg-blue-800" onClick={() => { const data = filter(search, allRestaurants); setFilteredRestaurants(data) }}>Search</button>
            </div>
            <div className="Restraunt-list  p-2 m-2 justify-between flex flex-wrap content-center">
                {

                    filteredRestaurants?.map((restaurant) => {

                        return <Link to={"restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id}><RestaurantCard {...restaurant?.info} />
                        </Link>
                    })
                }
            </div>
        </div>
    )
    )
}

export default Body;