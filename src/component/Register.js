import React, { useContext, useEffect, useState } from "react";
import { context } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./styles/login.css";

function Register() {
  const { userSignUp } = useContext(context);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErr, setFormErr] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErr(validate(userData));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErr).length === 0 && isSubmit) {
      userSignUp(userData);
    }
  }, [formErr, isSubmit, userData, userSignUp]);

  const validate = (values) => {
    const err = {};
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i;
    if (!values.email) {
      err.email = "email is required";
    } else if (!emailRegex.test(values.email)) {
      err.email = "invalid email";
    }
    if (values.password.length < 7) {
      err.password = "password must have minimum 7 characters";
    } else if (values.password.length > 12) {
      err.password = "password can't have more than 12 characters";
    }

    if (values.confirmPassword !== values.password) {
      err.confirmPassword = "password doesn't match";
    }

    return err;
  };

  return (
    <>
      <div className="container">
        <div className="signUp-container">
          <div className="signUp-header">
            <h4 style={{ color: "white", fontSize: "larger" }}>Register</h4>
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
            <p className="error">{formErr.email}</p>
            <div className="password">
              <input
                className="password-input"
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
              />
            </div>
            <p className="error">{formErr.password}</p>
            <div className="password">
              <input
                className="password-input"
                type="password"
                name="confirmPassword"
                placeholder="confirm password"
                onChange={handleChange}
              />
            </div>
            <p className="error">{formErr.confirmPassword}</p>
            <button className="button-1"> Sign Up</button>
            <p>
              Already have an account? <Link to="/"> SignIn</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
