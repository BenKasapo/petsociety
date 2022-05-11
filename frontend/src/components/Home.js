import GoogleMaps from "./GoogleMaps.js";
import Posts from "./Posts.js";
import Footer from "./Footer";
import Commentpost from "./Commentpost.js";

import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="contenaire">
        <div className="map">
         <GoogleMaps/>
        </div>
        <div className="posts">
          <h1> What is new today</h1>
          <div className="image_comment">
            <div className="image">
              <Posts
                dog="https://www.cumberland.nsw.gov.au/sites/default/files/styles/16_9/public/2021-01/animals-lost-pet.jpg?h=b7ff05a9&itok=S2TCAwDa"
                dogname={"Miauche"}
              />
            </div>
            <div className="comment">
              <Commentpost
                imagepost="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
                name="Gabriella Montez"
                textpost="I'm sure that i saw this dog aroung karaoglanoglu last night , near tempo market "
                date="14.December.2018"
              />
              <Commentpost
                imagepost="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
                name="thom harley"
                textpost="Verry sorry for you bro , i hope you will find him very soon"
                date="14.Nov.2020"
              />

              <Commentpost
                imagepost="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
                name="Jessica Pearson"
                textpost="It's very sad to loose his dog , "
                date="14.December.2018"
              />
            </div>
          </div>
          <div className="image_comment">
            <div className="image">
              <Posts
                dog="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cmetadata=none%2Conerror=redirect%2Cq=85%2Cwidth=968/wp-content/uploads/lost-dog-awareness-day1-scaled.jpg"
                dogname={"Spyke"}
              />
            </div>
            <div className="comment">
              <Commentpost
                imagepost="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
                name="Brice Simson"
                textpost="I'm sure that i saw this dog aroung karaoglanoglu last night , near tempo market "
                date="14.December.2018"
              />
              <Commentpost
                imagepost="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
                name="Jonathan Macardy"
                textpost="Verry sorry for you bro , i hope you will find him very soon"
                date="14.Nov.2020"
              />

              <Commentpost
                imagepost="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
                name="Sylvia Pearl"
                textpost="It's very sad to loose his dog , "
                date="14.December.2018"
              />
            </div>
          </div>
          <div className="image_comment">
            <div className="image">
              <Posts
                dog="https://www.ballarat.vic.gov.au/sites/default/files/styles/content_header/public/page/field_image/2019-03/Lost%20dog.jpg?itok=6nBc22JC"
                dogname={"Max"}
              />
            </div>
            <div className="comment">
              <Commentpost
                imagepost="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
                name="Gabriella Montez"
                textpost="I'm sure that i saw this dog aroung karaoglanoglu last night , near tempo market "
                date="14.December.2018"
              />
              <Commentpost
                imagepost="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
                name="thom harley"
                textpost="Verry sorry for you bro , i hope you will find him very soon"
                date="14.Nov.2020"
              />

              <Commentpost
                imagepost="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
                name="Jessica Pearson"
                textpost="It's very sad to loose his dog , "
                date="14.December.2018"
              />
            </div>
          </div>
        </div>
        <div className="middle">
          <h3>Your pet is your family . . .</h3>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
