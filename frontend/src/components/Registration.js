import { React, useEffect, useState } from "react";
import "./Registration.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register } from "../features/auth";

function Registration() {
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const { name, email, password, phoneNumber } = formData; //instead of using formData.email anytime'email'

  const onChange = (e) =>
    setformData({ ...formData, [e.target.name]: e.target.value });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password && phoneNumber) {
      dispatch(register({ formData, navigate, toast }));
    }
  };

  return (
    <div className="contentregis">
      <div className="body">
        <div className="titre">Registration</div>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div div className="details"></div>
          <div className="personal-details">
            <div className="little_box">
              <span className="dtls">Full Name </span>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
                placeholder="Enter your username"
              />
            </div>

            <div className="little_box">
              <span className="dtls">Email </span>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                placeholder="Enter your username"
              />
            </div>
            <div className="little_box">
              <span className="dtls">Phone Number </span>
              <input
                type="text"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => onChange(e)}
                placeholder="Enter your username"
              />
            </div>
            <div className="little_box">
              <span className="dtls">Password</span>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                placeholder="Enter your username"
              />
            </div>
          </div>
          <div />

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default connect()(Registration);
