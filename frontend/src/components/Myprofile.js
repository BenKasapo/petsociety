import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./Myprofile.css";
import Posts from "./Posts.js";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../features/auth";
const Myprofile = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setLogout());
  };

  return (
    <div className="profile">
      <div className="contenaireprofil">
        <div className="picture">
          <img src="Images/owner.jpg"></img>
        </div>
        <div className="info">
          {user?.result?._id && (
            <>
              <h5> {user?.result?.name}</h5>
            </>
          )}
          <h>99300.lefkosa (tunahan appart) </h>
        </div>
        <div className="navbarprofile">
          <ul>
            <li>Posts</li>
            <Link to="/addpost">
              <li>Add Post</li>
            </Link>
            <li>Community</li>
            <Link to="/">
              <li onClick={handleLogout}>Logout</li>
            </Link>
          </ul>
        </div>
        <div className="actual">
          <div className="tile">
            <h1>Your actual Posts </h1>
          </div>
          <div className="posts_user">
            <Posts
              petPicture="https://news.wttw.com/sites/default/files/field/image/FindingRoverCACC_0328.jpg"
              petName={"Spartacus "}
              text={
                "My dog was found yesterday he is so happy ,thanks for helping me"
              }
            />
            <Posts
              petPicture="https://dogginarounddaycare.com/wp-content/uploads/2017/06/doggin_blog_first_time_pet_owner.002.jpg"
              petName={"best friend "}
              text={" my best friends together , this is so cute  <3<3"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Myprofile;
