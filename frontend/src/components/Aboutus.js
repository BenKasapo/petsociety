import React from "react";
import "./aboutus.css";
function Aboutus({ img, name, title, paragraph }) {
  return (
    <div classname="body">
      <div className="contenair">
        <div className="picture">
          <img src={img} alt="image_of team"></img>
        </div>
        <div className="name">
          <h3>{name}</h3>
        </div>
        <div className="function">
          <h4>{title} </h4>
        </div>
        <div className="text">
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
