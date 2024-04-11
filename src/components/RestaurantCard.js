import FOOD from "../../assets/food.jpg"

function RestaurantCard(props) {
    const {name, cloudinaryImageId, costForTwo, avgRating, locality, areaName} = props.restaurantsDataList;

    return (
        <div className="restaurant-card">
            <img className="restaurant-card-image" src={FOOD} alt="Food Image"/>
            <div className="restaurant-card-detail">
                <div className="restaurant-card-tile-rating-div">
                    <h4>{name}</h4><h4>{avgRating}</h4>
                </div>
                <h6>{locality+", "+areaName}</h6>
                <h5>{costForTwo}</h5>
            </div>
        </div>
    );
}

export default RestaurantCard;