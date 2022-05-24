import { React, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import "./prelog.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../features/auth";
import { Button } from "react-bootstrap";

function Prelogin(setAlert) {
  const { loading, error } = useSelector((state) => ({ ...state.auth }));

  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData; //instead of using formData.email anytime'email'

  const onChange = (e) =>
    setformData({ ...formData, [e.target.name]: e.target.value });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ formData, navigate, toast }));
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="main_cont">
        <div className="element">
          <img src="Images/avtr.png" className="avatar"></img>

          <h1>Login here</h1>

          <form onSubmit={handleSubmit}>
            <p> Email</p>
            <input
              type="email"
              value={email}
              name="email"
              placeholder="Enter your email"
              onChange={(e) => onChange(e)}
            />
            <p> Password</p>
            <input
              type="password"
              value={password}
              name="password"
              placeholder="Enter your password"
              onChange={(e) => onChange(e)}
            />
            <Button className="btn " type="submit">
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default connect(null, {})(Prelogin);
