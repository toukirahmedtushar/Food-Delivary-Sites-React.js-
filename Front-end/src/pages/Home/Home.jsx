import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import ViewMenu from '../../components/ViewMenu/ViewMenu'
import { useState } from 'react'
import DisplayFood from '../../components/Display_food/DisplayFood'
import DisplayFoodItem from '../../components/DisplayFoodItem/DisplayFoodItem'


const Home = () => {
  const [menuList, setMenuList] = useState("All")
  return (
   <div>
   <Header></Header>
   <ViewMenu menuList={menuList} setMenuList={setMenuList}/>
    {/* This line is for debugging purposes, can be removed later  */}
   <div>{menuList}</div>  
   
   <DisplayFood category={menuList}></DisplayFood>
   
   </div>
  )
}

export default Home