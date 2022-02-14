import React, { useState } from "react";
import "./SignUp.css";

export const SignUp = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("event", event);
  };

  return (
    <div className="signup-container">
      <div className="signup">
        <div>
          <h3 className="title">Create your account</h3>
        </div>
        <form className="userform">
          <div className="first-name">
            <label className="label">First Name</label>
            <input
              className="input"
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="last-name">
            <label className="label">Last Name</label>
            <input
              className="input"
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="email">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className="password">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <div className="inner-button">
            <button className="submit" onClick={handleFormSubmit}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
