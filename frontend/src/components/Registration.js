import React from "react";
import "./Registration.css";
import { Link, NavLink } from "react-router-dom";

function Registration() {
  return (
    <div className="contentregis">
      <div className="body">
        <div className="titre">Registration</div>
        <form>
          <div div className="details"></div>
          <div className="personal-details">
            <div className="little_box">
              <span className="dtls">Full Name </span>
              <input
                type="text"
                name=""
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="little_box">
              <span className="dtls">Username </span>
              <input
                type="text"
                name=""
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="little_box">
              <span className="dtls">Email </span>
              <input
                type="text"
                name=""
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="little_box">
              <span className="dtls">Phone Number </span>
              <input
                type="text"
                name=""
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="little_box">
              <span className="dtls">Password</span>
              <input
                type="text"
                name=""
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="little_box">
              <span className="dtls">Confirm Password </span>
              <input
                type="text"
                name=""
                placeholder="Enter your username"
                required
              />
            </div>
          </div>
          <div />
          <div className="gender-details">
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <input type="radio" name="gender" id="dot-3" />
            <span className="gender-title">Gender</span>
            <div className="categories">
              <label for="dot-1">
                <span class="space one "></span>
                <span className="gender">Male</span>
              </label>
              <label for="dot-2">
                <span class="space two "></span>
                <span className="gender">Female</span>
              </label>
              <label for="dot-3">
                <span class="space three"></span>
                <span className="gender">Other</span>
              </label>
            </div>
          </div>

          <div className="button">
            <input type="submit" name="" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
