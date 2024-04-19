import { IMG_CDN_URL } from "../Contact";

const RestaurantMenu = ({ name, imageId, price, defaultPrice }) => {


    return (
        <div className="flex">
            <img src={IMG_CDN_URL + imageId} alt="Menu Item Image" className="h-20 w-20 border border-solid" />
            <span className="p-2 m-2">
                <h1 className="font-bold">{name}</h1>
                {price ? <p className="font-normal">Price: ₹{price / 100}</p> : <p className="font-normal">Price: ₹{defaultPrice / 100}</p>}
            </span>

        </div>
    )
}

export default RestaurantMenu;