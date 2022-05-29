import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import "./Commentpost.css";
import { commentPost } from "../features/posts";

const initialState = {
  commentText: "",
};

const Commentpost = ({ textpost, date, name, imagepost }) => {
  const [commentData, setCommentData] = useState(initialState);

  const { loading, error } = useSelector((state) => ({
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

  useEffect(() => {
    error && toast.error(error);
  }, [error]);
  const handleClear = () => {
    setCommentData({
      commentText: "",
    });
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="contenaire">
      <div className="contentcomment">
        {user?.result?._id && (
          <div className="commentcont">
            <form onSubmit={addComment}>
              <textarea
                row="4"
                cols="50"
                value={commentText}
                name="commentText"
                onChange={onInputChange}
                placeholder="Enter a comment"
              />
              <Button className="btn" onClick={handleClear} type="submit">
                Comment
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
export default Commentpost;
