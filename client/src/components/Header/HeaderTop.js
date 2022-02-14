import React from "react";
import { FaHome } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";

export const HeaderTop = () => {
  return (
    <>
      <div className="headerTopMain">
        <div className="innerRight">
          <FaHome className="home-icon" />
          <span>
            <Link to="/signin" className="adminLogin">
              Admin Login
            </Link>
          </span>
        </div>
        <div className="innerLeft">
          <span className="tollNumber">Toll Number: 123-456456</span>
          <div className="ctaLinks">
            <span className="signUp">
              <Link to="/signup">Sign Up</Link>
            </span>
            <span className="separator"> / </span>
            <span>
              <Link to="/signin" className="SignIn">
                Sign In
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
