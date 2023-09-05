import { restaurants } from "../Contact"
import RestaurantCard from "./RestaurantCard"

const Body = () => {
    return (
        // ES6
        <div className="Restraunt-list">
            {
                restaurants.map((restaurant) => {
                    return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
                })
            }
        </div>
    )
}

export default Body;