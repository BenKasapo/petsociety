import GoogleMaps from "./GoogleMaps.js";
import Posts from "./Posts.js";
import Footer from "./Footer";
import Commentpost from "./Commentpost.js";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getTours } from "../features/posts.js";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

async function getPosts() {
  const { data } = await axios.get("http://localhost:5000/api/posts");
  return data;
}

const Home = () => {
  const { tours, loading } = useSelector((state) => ({ ...state.post }));
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state.auth }));

  const [showLost, setShowLost] = useState(false);
  const [showFound, setShowFound] = useState(false);
  const [showAll, setShowAll] = useState(true);
  const { data, isLoading } = useQuery("posts", async () => getPosts());
  console.log(data);
  let posts_to_show = data;
  let lost_pets;
  let found_pets;

  lost_pets = data?.filter((lost) => lost.postType.toLowerCase() === "lost");
  found_pets = data?.filter(
    (found) => found.postType.toLowerCase() === "found"
  );
  if (showAll) {
    posts_to_show = data;
  }
  if (showLost) {
    posts_to_show = lost_pets;
  }

  if (showFound) {
    posts_to_show = found_pets;
  }

  const handleShowAllPosts = () => {
    setShowAll(true);
    setShowFound(false);
    setShowLost(false);
  };

  const handleShowFoundPets = () => {
    setShowAll(false);
    setShowFound(true);
    setShowLost(false);
  };

  const handleShowLostPets = () => {
    setShowAll(false);
    setShowFound(false);
    setShowLost(true);
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
  /*   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tourData);
    console.log(user);
    if (petName && petType && petLostLocation && text && postType) {
      dispatch(createTour({ tourData, navigate, toast }));
      //else {
      /*  dispatch(updateTour({ id, updatedTourData, toast, navigate }));*/
  //  }
  // handleClear();
  /*     
    }
  }; 
 */
  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }
  return (
    <div className="homepage">
      <div className="contenairehome">
        <div className="posts">
          <h1> What is new today</h1>
          <div className="image_comment">
            <div className="image">
              {/*    <div>{tours.length === 0 && <p> No posts found</p>}</div> */}
              <Button onClick={handleShowAllPosts}>All</Button>
              <Button onClick={handleShowFoundPets}>Found pets</Button>
              <Button onClick={handleShowLostPets}>Lost Pets</Button>
              <div>
                {isLoading && <h1>Loading data....</h1>}
                {posts_to_show &&
                  posts_to_show.map(
                    (item, index) => (
                      <div className="postgen">
                        <div className="postblock">
                          <Posts key={index} {...item} />
                          <Link to={`/editcomment/${item._id}`}>
                            <Button className="btn" type="submit">
                              ADD A COMMENT
                            </Button>
                          </Link>
                        </div>
                        <h2> {item.name}</h2>
                        <div className="comment">
                          {item.comments.map((m, index) => (
                            <div className="commentpart" key={index}>
                              <p>
                                <h4 style={{ color: "green" }}>{m.name}</h4>{" "}
                                {m.text}
                              </p>
                              {user?.result?._id === m.user && (
                                <Button
                                  onClick={() => deleteComment(item._id, m._id)}
                                >
                                  Delete
                                </Button>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) /*<Posts key={index} {...item} />*/
                  )}
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
