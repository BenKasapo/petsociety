import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="Footer">
      <div className="contenaire">
        <div className="left_side">
          <div className="sub_content">
            <div className="title">
              <h1>Pet Society</h1>
            </div>
            <div className="info">
              <div className="sub_info">
                <div className="image">
                  <img src="Images/locatio.png" alt="logo" />
                </div>
                <div className="text">
                  <h5> north cyprus,Girne(99300)</h5>
                </div>
              </div>
              <div className="sub_info">
                <div className="image">
                  <img src="Images/phone.png" alt="logo" />
                </div>
                <div className="text">
                  <h5> +(90)-567-890-233</h5>
                </div>
              </div>
              <div className="sub_info">
                <div className="image">
                  <img src="Images/ico.png" alt="logo" />
                </div>
                <div className="text">
                  <h5> Petsociety@gmail.com</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="text_copy">
            <h5> This website is a copyright @ 2022 Team work</h5>
          </div>
          <div className="social_media">
            <div className="image">
              <div className="media">
                <img src="Images/insta.png" alt="logo" />
              </div>
              <div className="media">
                <img src="Images/fb.png" alt="logo" />
              </div>
              <div className="media">
                <img src="Images/twit.png" alt="logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="right_side">
          <div className="image">
            <img src="Images/logopet.png" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
