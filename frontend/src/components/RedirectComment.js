import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { commentPost } from "../api";
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
  console.log(id);
  useEffect(() => {
    if (id) {
      const singleTour = userTours.find((tour) => tour._id === id);
      console.log(singleTour);
      console.log(id);
      commentData({ ...singleTour });
    } else {
      console.log(" no id no token");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const addComment = (e) => {
    e.preventDefault();
    if (commentText) {
      dispatch(commentPost({ id, commentData }));
      console.log(id);
    } else {
      console.log("no id");
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
