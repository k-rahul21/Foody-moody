import { Link } from "react-router-dom";
import empty_cart from "../../assets/img/empty_cart.webp";
import "./Cart.scss";

const Cart = () => {
  return (
    <div className="cart-container empty-container">
      <img className="cart-image empty-image" src={empty_cart} />
      <div className="cart-container-info empty-container-info">
        <h3 className="mb-10">Your Cart is empty!</h3>
        <p>Good food is always cooking! Go ahead, order some yummy items from the menu.</p>
        <button className="home-btn search-btn text-14">
          <Link to="/">Order Something</Link>
        </button>
      </div>
    </div>
  )
}

export default Cart;