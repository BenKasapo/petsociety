import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBValidation,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import ChipInput from "material-ui-chip-input";
import FileBase from "react-file-base64";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createTour } from "../features/posts";

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
    ...state.tour,
  }));
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { petName, petType, petLostLocation, text, postType } = tourData;
  {
    /* const { id } = useParams();

  useEffect(() => {
    if (id) {
      const singleTour = userTours.find((tour) => tour._id === id);
      console.log(singleTour);
      setTourData({ ...singleTour });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);*/
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
    <div
      style={{
        margin: "auto",
        padding: "15px",
        width: "650px",
        alignContent: "center",
        marginTop: "250px",
      }}
      className="container"
    >
      <MDBCard alignment="center">
        <h5>{/*id?"Update Tour" :*/ "Add Tour"}</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} className="row g-3" noValidate>
            <div className="col-md-12">
              <MDBInput
                placeholder="Enter The Pet_name"
                type="text"
                value={petName || ""}
                name="petName"
                onChange={onInputChange}
                className="form-control"
                required
                invalid
                validation="Please provide title"
              />
            </div>
            <div className="col-md-12">
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
  );
};

export default Add_post;
