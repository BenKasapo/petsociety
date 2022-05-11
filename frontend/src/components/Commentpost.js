import React from "react";
import "./Commentpost.css";
export const Commentpost = ({ textpost, date, name, imagepost }) => {
  return (
    <div className="contenaire">
      <div className="contentcomment">
        <div className="image">
          <img src={imagepost} alt="imges" />
        </div>
        <div className="post">
          <div className="name">
            <h2>{name}</h2>
          </div>
          <div className="text">
            <p>{textpost}</p>
          </div>
          <div className="date">
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Commentpost;
