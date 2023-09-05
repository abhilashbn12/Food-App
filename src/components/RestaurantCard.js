import { IMG_CDN_URL } from "../Contact"
const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
    return (
        <div className="card">
            <img alt="Restraunt-image" src={IMG_CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <p className="cuisines">{cuisines.join(" , ")}</p>
            <h4>{avgRating} star </h4>
        </div>
    )
}

export default RestaurantCard;