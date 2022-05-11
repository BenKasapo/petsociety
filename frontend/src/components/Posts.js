import Footer from "./Footer";

import Commentpost from "./Commentpost";
import "./Posts.css";
const Posts = ({ dog, dogname }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="sectionpost">
          <div className="card-elements">
            <div className="image-container">
              <img src={dog} alt="Lost Dog" />
            </div>
            <div className="card-text">
              <h1>{dogname}</h1>
              <p>
                This dog is lost for days now and please help us find it for us.
                This dog is lost for days now and please help us find it for us
                This dog is lost for days now and please help us find it for us
                This dog is lost for days now and please help us find it for us
              </p>
              <h3>Contact +905338330147 </h3>
              <button>COMMENT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
