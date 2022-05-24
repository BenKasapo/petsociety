import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  return (
    <div className="container">
      <div className="logo">PETSOCIETY</div>
      <div className="NavMenu">
        {user?.result?._id && (
          <>
            <h5>logged as : {user?.result?.name}</h5>
          </>
        )}
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
