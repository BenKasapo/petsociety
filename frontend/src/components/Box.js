import React from "react";
import "./Box.css";
function Box({ total, number, title, img }) {
  return (
    <div className="content">
      <div className="subcontent">
        <div className="title">
          <h2>{title} </h2>
        </div>
        <div className="littlebox">
          <div className="icon">
            <img src={img} alt="animage"></img>
          </div>
          <div classname="number">
            <h1>{total}</h1>
            <h6>{number}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
