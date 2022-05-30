import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { commentPost, getTour } from "../api";
import Posts from "./Posts";

const initialState = {
  commentText: "",
};

const RedirectComment = () => {
  const dispatch = useDispatch();
  const [commentData, setCommentData] = useState(initialState);
  const { commentText } = commentData;
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setCommentData({ ...commentData, [name]: value });
  };

  const { id } = useParams();
  const { userTours } = useSelector((state) => ({
    ...state.post,
  }));
  //console.log(id);

  const addComment = (e) => {
    e.preventDefault();
    if (commentText) {
      if (!id) {
        console.log("no id");
      } else {
        console.log(id);
        const updatedTourData = { ...commentData };
        console.log(updatedTourData);
        dispatch(commentPost(id, { updatedTourData }));
      }
      //dispatch(commentPost({ id, updatedTourData }));
    }
  };

  return (
    <div>
      <h1>make your comment</h1>

      <form onSubmit={addComment}>
        <textarea
          row="4"
          cols="50"
          value={commentText}
          name="commentText"
          onChange={onInputChange}
          placeholder="Enter a comment"
        />
        <Button className="btn" type="submit">
          Comment
        </Button>
      </form>
    </div>
  );
};

export default RedirectComment;
