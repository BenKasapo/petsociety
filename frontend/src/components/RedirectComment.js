import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { commentPost, getTour } from "../api";
import { comment } from "../features/comments";
import Posts from "./Posts";

const initialState = {
  commentText: "",
};
const RedirectComment = () => {
  const dispatch = useDispatch();

  /* const [postid, setpostid] = useState(""); */
  const [commentData, setCommentData] = useState(initialState);
  const { commentText } = commentData;
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setCommentData({ ...commentData, [name]: value });
  };

  const { id } = useParams();
  //postid = id;
  const { userTours } = useSelector((state) => ({
    ...state.post,
  }));
  //console.log(id);
  // console.log(postid);
  const addComment = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      `http://localhost:5000/api/posts/comment/${id}`,
      { text: commentText },
      {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("profile"))["token"]
          }`,
        },
      }
    );

    console.log(res);

    if (res?.status == 200) {
      window.location.href = "/";
    }
    /*  if (commentText) {
      if (!id) {
        console.log("no id");
      } else {
        console.log(id);
 
        console.log(commentData);
        dispatch(comment(commentData));
      }
    } */
    //dispatch(commentPost({ id, updatedTourData }));
  };

  return (
    <div>
      <h1>write your comment</h1>

      <form onSubmit={addComment}>
        <textarea
          row="4"
          cols="50"
          value={commentText}
          name="commentText"
          onChange={onInputChange}
          placeholder="Enter a comment"
        />
        {/* <input type="text" value={postid} /> */}
        <Button className="btn" type="submit">
          Comment
        </Button>
      </form>
    </div>
  );
};

export default RedirectComment;
