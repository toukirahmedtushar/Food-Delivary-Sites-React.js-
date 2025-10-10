import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext.jsx';
import "./DisplayFood.css";
import DisplayFoodItem from '../DisplayFoodItem/DisplayFoodItem.jsx';

const DisplayFood = (category) => {
    const {food_list}= useContext(StoreContext);
  return (
    <div>
        <h2>Your Favourite Item is Here.......</h2>
        <div className="display-food">
            {food_list.map((item,index)=>{
                if(category.category==="All" || item.category===category.category){
                    return <DisplayFoodItem key={index} id={item._id} name={item.name} price={item.price} des={item.des} image={item.image}></DisplayFoodItem>
                }
            })}
        </div>
    </div>
  )
}

export default DisplayFood