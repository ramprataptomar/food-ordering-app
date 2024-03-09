import RestaurantCard from "./RestaurantCard";
import {restaurantsDataList} from '../utils/restaurantsData';
import {useState} from "react";

function Body() {
    const [restaurantList, setRestaurantList] = useState(restaurantsDataList);
    return (
        <div className="body-container">
            <button className="body-filter-btn" onClick={ () => {
                let resList = restaurantList.filter(
                    (res) => res.info.avgRating>4.5
                );
                setRestaurantList(resList);
                }}>Restaurants with higher rating</button>
            <div className="restaurant-container">
                {
                    restaurantList.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} restaurantsDataList={restaurant}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Body;