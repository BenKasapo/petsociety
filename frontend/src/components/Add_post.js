import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBValidation,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import FileBase from "react-file-base64";
//import ChipInput from "material-ui-chip-input";
import { toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createTour } from "../features/posts";
import axios from "axios";
import "./Add_post.css";
import Footer from "./Footer";

const initialState = {
  petName: "",
  petType: "",
  petPicture: "",
  petLostLocation: "",
  text: "",
  postType: "",
};

const Add_post = () => {
  const [tourData, setTourData] = useState(initialState);
  const [tagErrMsg, setTagErrMsg] = useState(null);
  const { error, userTours } = useSelector((state) => ({
    ...state.post,
  }));
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { petName, petType, petLostLocation, text, postType } = tourData;
  {
    const { id } = useParams();

    useEffect(() => {
      if (id) {
        const singleTour = userTours.find((tour) => tour._id === id);
        console.log(singleTour);
        setTourData({ ...singleTour });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);
  }

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tourData);
    console.log(user);
    if (petName && petType && petLostLocation && text && postType) {
      dispatch(createTour({ tourData, navigate, toast }));
      //else {
      /*  dispatch(updateTour({ id, updatedTourData, toast, navigate }));*/
      //  }
      handleClear();
      // console.log(JSON.parse(localStorage.getItem("profile"))["token"])
      // axios.post("http://localhost:5000/api/posts", tourData, {
      //   headers: {
      //     "Authorization": `Bearer ${JSON.parse(localStorage.getItem("profile"))["token"]}`
      //   }
      // })
    }
  };
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setTourData({ ...tourData, [name]: value });
  };

  const handleClear = () => {
    setTourData({
      petName: "",
      petType: "",
      petPicture: "",
      petLostLocation: "",
      text: "",
      postType: "",
    });
  };

  return (
    <div>
      <>
        <div className="subcontpost">
          <div className="picture">
            <img src="Images/owner.jpg"></img>
          </div>

          <div className="navbarprofile">
            <ul>
              <Link to="/Myprofile">
                <li>Posts</li>
              </Link>
              <Link to="/addpost">
                <li>Add Post</li>
              </Link>
              <li>
                <Link to="/community">Community</Link>
              </li>
              <Link to="/addpost">
                <li>Logout</li>
              </Link>
            </ul>
          </div>
        </div>
      </>
      <div className="addpostcont">
        <MDBCard alignment="center">
          <h5>{/*id?"Update Tour" :*/ "Add Post"}</h5>
          <MDBCardBody className="black">
            <MDBValidation
              onSubmit={handleSubmit}
              className="row g-3"
              noValidate
            >
              <div className="col-md-12">
                <h6>Pet name :</h6>
                <MDBInput
                  placeholder="Enter The Pet_name"
                  type="text"
                  value={petName}
                  name="petName"
                  onChange={onInputChange}
                  className="form-control"
                  required
                  invalid
                  validation="Please provide title"
                />
              </div>
              <div className="col-md-12">
                <h6>Pet postType :</h6>
                <MDBInput
                  placeholder="Enter The Pet Type"
                  type="text"
                  value={petType || ""}
                  name="petType"
                  onChange={onInputChange}
                  className="form-control"
                  required
                  invalid
                  validation="Please provide title"
                />
              </div>
              <div className="col-md-12">
                <h6>Location :</h6>
                <MDBInput
                  placeholder="Enter The pet lost location "
                  type="text"
                  value={petLostLocation || ""}
                  name="petLostLocation"
                  onChange={onInputChange}
                  className="form-control"
                  required
                  invalid
                  validation="Please provide title"
                />
              </div>
              <div className="col-md-12">
                <h6>Post Type (Lost /found?) :</h6>
                <MDBInput
                  placeholder="EnterPost type ( lost or found?)"
                  type="text"
                  value={postType || ""}
                  name="postType"
                  onChange={onInputChange}
                  className="form-control"
                  required
                  invalid
                  validation="Please provide title"
                />
              </div>
              <div className="col-md-12">
                <h6>Description :</h6>
                <MDBInput
                  placeholder="Enter Description"
                  type="text"
                  value={text}
                  name="text"
                  onChange={onInputChange}
                  className="form-control"
                  required
                  invalid
                  textarea
                  rows={4}
                  validation="Please provide description"
                />
              </div>

              <div className="d-flex justify-content-start">
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setTourData({ ...tourData, petPicture: base64 })
                  }
                />
              </div>
              <div className="col-12">
                <MDBBtn style={{ width: "100%" }}>
                  {/*id ? "Update" :*/ "Submit"}
                </MDBBtn>
                <MDBBtn
                  style={{ width: "100%" }}
                  className="mt-2"
                  color="danger"
                  onClick={handleClear}
                >
                  Clear
                </MDBBtn>
              </div>
            </MDBValidation>
          </MDBCardBody>
        </MDBCard>
      </div>
      <Footer />
    </div>
  );
};

export default Add_post;
