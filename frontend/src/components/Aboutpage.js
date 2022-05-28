import React from "react";
import "./About.css";
import Aboutus from "./Aboutus";
import Footer from "./Footer";
function Aboutpage() {
  return (
    <div className="bodyabout">
      <div className="about-us">
        <div className="title">
          <h3>About Us </h3>
        </div>

        <div className="spane">
          <span>
            <p>
              we are a group of 4 engineer student of Girne American University
              working on our graduation project .
            </p>{" "}
            by working on this we are trying to solve a problem of the society
            in cyprus with thousand of pets lost every year (90 pet lost every
            month ) this is so sad for our citizen
            <p>
              {" "}
              Since 2020 with the pandemic , most of our refuge of pet closed
              and in the other side people couldnt feed their pets anymore.
              thats how our team work started.
            </p>
          </span>
        </div>
        <div className="members">
          <Aboutus
            paragraph={
              "Congolese (Drc)student of Girne American University , at her last semester , learning web back and front end using javascript , nodejs and css all in ReactJS"
            }
            title={"Web Developper"}
            name={"Joelle Akilimali"}
            img="https://www.biography.com/.image/t_share/MTczNjEwODI2NTg5MDg3MTI0/michelle-obama-gettyimages-85246899.jpg"
          />

          <Aboutus
            paragraph={
              "Congolese (Drc)student of Girne American University , at her last semester , learning web back and front end using javascript , nodejs and css all in ReactJS"
            }
            title={"Full stack developper"}
            name={"Ben Kasapo"}
            img="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg"
          />

          <Aboutus
            paragraph={
              "Congolese (Drc)student of Girne American University , at her last semester , learning web back and front end using javascript , nodejs and css all in ReactJS"
            }
            title={"Web Developper"}
            name={"Ibrahim Akilimali"}
            img="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg"
          />

          <Aboutus
            paragraph={
              "Congolese (Drc)student of Girne American University , at her last semester , learning web back and front end using javascript , nodejs and css all in ReactJS"
            }
            title={"Web Developper"}
            name={"Daisy Kasapo"}
            img="https://www.biography.com/.image/t_share/MTczNjEwODI2NTg5MDg3MTI0/michelle-obama-gettyimages-85246899.jpg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Aboutpage;
