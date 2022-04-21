import GoogleMaps from "./GoogleMaps.js";
import Posts from "./Posts.js";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <GoogleMaps />
      <Posts />
    </div>
  );
};

export default Home;
