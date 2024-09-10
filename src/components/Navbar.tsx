import ProfilePic from "../assets/businessman-character-avatar-isolated_24877-60111.avif";
import CartLogo from "../assets/cart-large-minimalistic-svgrepo-com.svg";
function Navbar() {
  return (
    <nav>
      <input type="text" placeholder="Search for groceries and inspirations" />
      <div className="profile">
        <img src={ProfilePic} alt="" />
        <div>
          <h3>Victor Pacheco</h3>
          <small>560 Club Points</small>
        </div>
      </div>
      <div className="cart">
        <img src={CartLogo} alt="" />
        <div>
          <h3>$64.50</h3>
          <small>24 items</small>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
