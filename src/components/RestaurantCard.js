import { IMG_CDN_URL } from "../Contact"
const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {

    return (
        <div className="card w-56 p-2 m-2 shadow-xl bg-pink-50 h-80 hover overflow-hidden hover:border-2">

            <img alt="Restraunt-image" className="h-40 w-52" src={IMG_CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold text-l font-serif py-2">{name}</h3>
            <p className="cuisines font-sans text-gray-600">{cuisines.slice(0, 3).join(" , ")}</p>
            <h4>{avgRating} star </h4>
        </div>
    )
}

export default RestaurantCard;