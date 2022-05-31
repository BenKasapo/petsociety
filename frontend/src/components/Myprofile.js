import React, { useEffect } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./Myprofile.css";
import Posts from "./Posts.js";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../features/auth";
import { deleteTour, getTourByUser } from "../features/posts";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBCardGroup,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import axios from "axios";
import { Button } from "react-bootstrap";

const Myprofile = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setLogout());
  };

  const { userTours, loading } = useSelector((state) => ({ ...state.post }));
  const userId = user?.result?._id;

  useEffect(() => {
    if (userId) {
      dispatch(getTourByUser(userId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  if (loading) {
    return <h2>LOADING...</h2>;
  }
  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete this Post?")) {
      dispatch(deleteTour({ id, toast }));
    }
  };

  const deleteComment = async (postID, commentID) => {
    const res = await axios.delete(
      `http://localhost:5000/api/posts/comment/${postID}/${commentID}`,
      {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("profile"))["token"]
          }`,
        },
      }
    );

    if (res.status == "200") {
      window.location.href = window.location.href;
    }
  };

  return (
    <div className="profile">
      <div className="contenaireprofil">
        <div className="picture">
          <img src="Images/PETSOCIETY.jpg"></img>
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
            <Link to="/Myprofile">
              <li>Posts</li>
            </Link>
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

          <div>{userTours.length === 0 && <p> No posts found</p>}</div>
          <div className="posts_user">
            <div>
              {userTours &&
                userTours.map((item, index) => (
                  <>
                    <div className="subposts_user" key={index}>
                      <div className="subpostsub">
                        <div>
                          <img src={item.petPicture} alt="image" />
                        </div>
                        <h4>Pet Name: {item.petName} </h4>
                        <h4>pet Lost Location: {item.petLostLocation}</h4>
                        <h4>Pet Type: {item.petType}</h4>
                        <h4>Post Type: {item.postType}</h4>
                        <div>Text: {item.text}</div>
                        <div className="buttondesign">
                          <Link to={`/editpost/${item._id}`}>
                            <button>Edit </button>
                          </Link>
                          <button
                            className="deletbutton"
                            onClick={() => handleDelete(item._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      <div className="commentpost">
                        {item.comments.map((m, index) => (
                          <div className="commentsubpost" key={index}>
                            <h5>
                              <h4 style={{ color: "green" }}>{m.name}</h4>
                              {m.text}
                            </h5>
                            <Button
                              onClick={() => deleteComment(item._id, m._id)}
                            >
                              Delete
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                    <hr></hr>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Myprofile;
