import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "./Commentpost.css";

const initialState = {
  commentText: "",
};

export const Commentpost = ({ textpost, date, name, imagepost }) => {
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

  useEffect(() => {
    error && toast.error(error);
  }, [error]);
  const handleClear = () => {
    setCommentData({
      commentText: "",
    });
  };

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
