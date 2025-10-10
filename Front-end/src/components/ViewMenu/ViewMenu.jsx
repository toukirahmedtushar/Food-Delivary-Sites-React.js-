import React from "react";
import "./ViewMenu.css";
import { menu_list } from "../../assets/frontend_assets/assets";
const ViewMenu = ({ menuList, setMenuList }) => {
  return (
    <div className="view-menu" id="explore-menu">
      <h3>Explore Menu</h3>
      <p>Choose menu from The below items.</p>
      <div className="view-menu-items">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setMenuList((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            className="view-menu-item"
            key={index}
          >
            <img
              src={item.menu_image}
              className={menuList === item.menu_name ? "active" : ""}
              alt={item.name}
            />
            <h2>{item.menu_name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewMenu;
