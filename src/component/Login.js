import React, { useContext, useEffect, useState } from "react";
import { context } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./styles/login.css";

function Login() {
  const { userSignIn } = useContext(context);
  const [userDetail, setUserDetail] = useState({ email: "", password: "" });
  const [error, setError] = useState({});
  const [submit, setSubmit] = useState(false);
  const handleChange = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(userDetail));
    setSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && submit) {
      userSignIn(userDetail);
    }
  }, [error, submit, userDetail, userSignIn]);

  const validate = (values) => {
    const err = {};
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i;
    if (!values.email) {
      err.email = "email is required";
    } else if (!emailRegex.test(values.email)) {
      err.email = "invalid email";
    }
    if (!values.password) {
      err.password = "password is required";
    }

    return err;
  };

  return (
    <div>
      <div className="container">
        <div className="signUp-container">
          <div className="signUp-header">
            <h4 style={{ color: "white", fontSize: "larger" }}>Member Login</h4>
          </div>
          <form method="POST" className="signUp-form" onSubmit={handleSubmit}>
            <div className="email">
              <input
                className="email-input"
                type="text"
                name="email"
                placeholder="email"
                onChange={handleChange}
              />
            </div>
            <p className="error">{error.email}</p>
            <div className="password">
              <input
                className="password-input"
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
              />
            </div>
            <p className="error">{error.password}</p>

            <button className="button-1"> Sign In</button>
            <p>
              <Link to="/register"> SignUp</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
