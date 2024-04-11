import RestaurantCard from "./RestaurantCard";
import {restaurantsDataList} from '../utils/restaurantsData';
import {useEffect, useState} from "react";
import {MENU_URL} from "../utils/constants";
import {Link} from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantMenu from "./RestaurantMenu";


function Body() {

    const [restaurantList, setRestaurantList] = useState(restaurantsDataList);
    const [filteredList, setFilteredList] = useState(restaurantsDataList);
    const [searchText, setSearchText] = useState("");

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     const data = await fetch(MENU_URL);
    //     const json = await data.json();
    //     setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    //     setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    //     {
    //         console.log(restaurantList);
    //         <RestaurantMenu key={restaurantList} menu={restaurantList}/>
    //     }
    // }

    if(restaurantList == null)
        return <Shimmer/>;

    return (
        <div className="body-container">
            <div className="body-container-filter-sorting">
                <div className="body-container-search-filter">
                    <input
                        className="body-filter-btn"
                        type="text"
                        placeholder="Search your food"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }
                        }/>
                    <button
                        className="body-filter-btn"
                        onClick={() => {
                            let resList= restaurantList.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredList(resList);
                        }}
                    >Search</button>
                </div>

                <button className="body-filter-btn" onClick={ () => {
                    let resList = restaurantList.filter(
                        (res) => res.info.avgRating>4.2
                    );
                    setFilteredList(resList);
                }}>Restaurants with higher rating</button>
            </div>


            <div className="restaurant-container">
                {
                    filteredList?.map((restaurant) => (
                        <Link to={"/restaurant/"+restaurant.info.id}><RestaurantCard key={restaurant.info.id} restaurantsDataList={restaurant.info}/></Link>
                    ))
                }
            </div>
        </div>
    );
}

export default Body;