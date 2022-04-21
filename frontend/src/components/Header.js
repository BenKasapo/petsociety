import "./Header.css";
const Header = () => {
  return (
    <div className="container">
      <div className="logo">PETSOCIETY</div>
      <div className="NavMenu">
        <ul>
          <li>HOME</li>
          <li>CONTACT</li>
          <li>ABOUT US</li>
          <li>SIGN IN</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
