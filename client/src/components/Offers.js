import React from "react";
import "./Offers.css";
import { FaDollarSign, FaHSquare, FaMobile } from "react-icons/fa";

export const Offers = () => {
  return (
    <div className="container">
      <div className="offers">
        <div className="col-md-4 sign mb-4">
          <FaDollarSign className="icon" />
          <div className="inner-offer">
            <div className="header">UP TO USD.50 OFF</div>
            <div className="sub-header"> TRAVEL SMART</div>
          </div>
        </div>
        <div className="col-md-4 sign mb-4">
          <FaHSquare className="icon" />
          <div className="inner-offer">
            <div className="header">UP TO 70% OFF</div>
            <div className="sub-header">ON HOTELS ACROSS WORLD</div>
          </div>
        </div>
        <div className="col-md-4 sign mb-4">
          <FaMobile className="icon" />
          <div className="inner-offer">
            <div className="header">FLAT USD. 50 OFF</div>
            <div className="sub-header">US APP OFFER</div>
          </div>
        </div>
      </div>
    </div>
  );
};
