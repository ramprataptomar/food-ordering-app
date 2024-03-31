import {Link} from "react-router-dom";

function Orders() {
    return (
        <div className="empty-cart">
            <img className="cart-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="empty-cart"/>
            <div className="cart-title">Your Cart is Empty</div>

            <Link to={"/"}><div className="cart-button">Order Something</div></Link>
        </div>
    )
}

export default Orders;