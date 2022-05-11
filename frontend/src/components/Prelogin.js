import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./prelog.css";
function Prelogin() {
  return (
    <div>
      <div className="main_cont">
        <div className="element">
          <img src="Images/avtr.png" className="avatar"></img>
          <h1>Login here</h1>
          <form>
            <p> Username</p>
            <input type="text" name="" placeholder="Enter your username" />
            <p> Password</p>
            <input type="password" name="" placeholder="Enter your password" />

            <input type="submit" name="" value="Login" />

            <a href="#"> Password forget ?</a>

            <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Prelogin;
