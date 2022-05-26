import Footer from "./Footer";

import Commentpost from "./Commentpost";
import "./Posts.css";
const Posts = ({
  petName,
  petType,
  petPicture,
  petLostLocation,
  text,
  postType,
}) => {
  return (
    <div className="card-containerpost">
      <div className="cardpost">
        <div className="sectionpost">
          <div className="card-elementspost">
            <div className="image-container">
              <img src={petPicture} alt="Lost Dog" />
            </div>
            <div className="card-text">
              <h1>{petName}</h1>
              <p>{petType}</p>
              <p>{petLostLocation}</p>
              <p>{text}</p>
              <h3>{postType} </h3>
              <button>COMMENT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
