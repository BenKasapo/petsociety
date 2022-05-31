import Footer from "./Footer";

import Commentpost from "./Commentpost";
import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";
const initialState = {
  commentText: "",
};

const Posts = ({
  petName,
  petType,
  petPicture,
  petLostLocation,
  text,
  postType,
}) => {
  const [commentData, setCommentData] = useState(initialState);

  const { commentPost, loading, error } = useSelector((state) => ({
    ...state.post,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { commentText } = commentData;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setCommentData({ ...commentData, [name]: value });
  };
  const { user } = useSelector((state) => ({ ...state.auth }));

  const addComment = (id, e) => {
    e.preventDefault();
    if (commentText) {
      dispatch(commentPost({ id, commentData, navigate, toast }));
      handleClear();
    }
  };
  const { userTours } = useSelector((state) => ({
    ...state.post,
  }));
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const singleTour = userTours.find((tour) => tour._id === id);
      console.log(singleTour);
      commentData({ ...singleTour });
    } else {
      console.log("no id ");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  useEffect(() => {
    error && toast.error(error);
  }, [error]);
  const handleClear = () => {
    setCommentData({
      commentText: "",
    });
  };
  return (
    <div className="card-containerpost">
      <div className="sectionpost">
        <div className="image-container">
          <img src={petPicture} alt="Lost Dog" />
        </div>
        <div className="card-text">
          <h1> Pet Name : {petName}</h1>
          <h5>Pet Type : {petType}</h5>
          <h5>Location : {petLostLocation}</h5>
          <h5> Post Type : {postType} </h5>
          <p>{text}</p>

          {/*               <>
                {user?.result?._id && (
                  <form onSubmit={addComment}>
                    <textarea
                      row="4"
                      cols="50"
                      value={commentText}
                      name="commentText"
                      onChange={onInputChange}
                    />
                    <Button onClick={handleClear} type="submit">
                      Comment
                    </Button>
                  </form>
                )}
              </> */}

          <>{/* <Commentpost />*/}</>
        </div>
      </div>
    </div>
  );
};

export default Posts;
