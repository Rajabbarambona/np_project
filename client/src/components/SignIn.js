import React, { useState } from "react";
import "./SignIn.css";

export const SignIn = () => {
  const [values, setValues] = useState({
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
    <div className="signin-container">
      <div className="signin">
        <div>
          <h3 className="title">Sign In with your account</h3>
        </div>
        <form className="userform">
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
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
