import FireWorkLogo from "../assets/celebration-firework-party-svgrepo-com.svg";
import DinnerLogo from "../assets/fork-spoon-svgrepo-com.svg";
import HealthLogo from "../assets/health-svgrepo-com.svg";
import MeatLogo from "../assets/meat-svgrepo-com.svg";
import BBQLogo from "../assets/bbq-svgrepo-com.svg";
import FishLogo from "../assets/fish-svgrepo-com.svg";
import EggplantLogo from "../assets/eggplant-svgrepo-com.svg";
import CupcakeMuffinLogo from "../assets/cupcake-muffin-svgrepo-com.svg";
import CoctailLogo from "../assets/coctail-svgrepo-com.svg";

function Categories() {
  return (
    <div className="categories">
      <div className="category">
        <img src={FireWorkLogo} alt="" />
        <p>July 4th</p>
      </div>
      <div className="category active">
        <img src={DinnerLogo} alt="" />
        <p>Dinners</p>
      </div>
      <div className="category">
        <img src={HealthLogo} alt="" />
        <p>Healthy</p>
      </div>
      <div className="category">
        <img src={MeatLogo} alt="" />
        <p>Meat</p>
      </div>
      <div className="category">
        <img src={BBQLogo} alt="" />
        <p>Grilling</p>
      </div>
      <div className="category">
        <img src={FishLogo} alt="" />
        <p>Keto</p>
      </div>
      <div className="category">
        <img src={EggplantLogo} alt="" />
        <p>Vege</p>
      </div>
      <div className="category">
        <img src={CupcakeMuffinLogo} alt="" />
        <p>Desserts</p>
      </div>
      <div className="category">
        <img src={CoctailLogo} alt="" />
        <p>Coctails</p>
      </div>
    </div>
  );
}

export default Categories;
