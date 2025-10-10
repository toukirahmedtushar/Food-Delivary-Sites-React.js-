import React, { useContext } from "react";
import "./DisplayFoodItem.css";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../context/StoreContext";

const DisplayFoodItem = ({ id, name, price, des, image }) => {
  const {cartItems, addToCart,removeFromCart}= useContext(StoreContext);
  
  return (
    <div className="display-food">
      <div className="display-food-item">
        <div className="food-image">
          <img src={image} alt={name} />
        </div>
        <div className="food-details">
          <h3>{name}</h3>
          <img
            src={assets.rating_starts}
            alt="Rating"
            className="rating-star"
          />
          <p>{des}</p>
          <h3>Price: ${price}</h3>
        </div>
        <div className="additem">
          {!cartItems[id] ?<button className="add-to-cart" onClick={()=>addToCart(id)}><p>Add to Cart</p><span className="plus">+</span></button>
          : <div className="add-item-count">
              <button className="add-to-cart" onClick={()=>addToCart(id)}><p>Add to Cart</p><span className="plus">+</span> </button>
              <h2>{cartItems[id]}</h2>
              <button className="add-to-cart" onClick={()=>removeFromCart(id)} ><p>Remove to Cart</p> <span className="plus">-</span></button>
            </div>}
          
          
        </div>

        
      </div>
    </div>
  );
};

export default DisplayFoodItem;
