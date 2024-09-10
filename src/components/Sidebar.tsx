import HomeLogo from "../assets/home-svgrepo-com.svg";
import LightBulb from "../assets/lightbulb-svgrepo-com.svg";
import GroceriesLogo from "../assets/groceries-grocery-svgrepo-com.svg";
import BadgeLogo from "../assets/badge-dollar-svgrepo-com.svg";
import ChefHatLogo from "../assets/chef-hat-svgrepo-com.svg";

import ClipboardLogo from "../assets/clipboard-list-svgrepo-com.svg";
import CheckListLogo from "../assets/checklist-minimalistic-svgrepo-com.svg";
import FridgeLogo from "../assets/fridge-svgrepo-com.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Delishly</h1>
      <ul className="main-menu">
        <li>
          <img src={HomeLogo} alt="" />
          <p>Home</p>
        </li>
        <li>
          <img src={LightBulb} alt="" />
          <p>Inspirations</p>
        </li>
        <li>
          <img src={GroceriesLogo} alt="" />
          <p>Groceries</p>
        </li>
        <li>
          <img src={BadgeLogo} alt="" />
          <p>Top Deals</p>
        </li>
        <li>
          <img src={ChefHatLogo} alt="" />
          <p>Restaurants</p>
        </li>
      </ul>
      <p>Your Kitchen</p>
      <ul className="personal-menu">
        <li>
          <img src={CheckListLogo} alt="" />
          <p>Grocery List</p>
        </li>
        <li>
          <img src={ClipboardLogo} alt="" />
          <p>My Recipes</p>
        </li>
        <li>
          <img src={FridgeLogo} alt="" />
          <p>My Fridge</p>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
