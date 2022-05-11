import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container">
      <div className="logo">PETSOCIETY</div>
      <div className="NavMenu">
        <ul>
          <Link to="/">
            <li>HOME</li>
          </Link>
          <Link to="/pages">
            <li>CONTACT</li>
          </Link>
          <Link to="/aboutpage">
            <li>ABOUT US</li>
          </Link>
          <Link to="/toggle">
            <li>SIGN IN</li>
          </Link>
          <Link to="/Myprofile">
            <li>My profile</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
