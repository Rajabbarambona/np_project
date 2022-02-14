import React from "react";
import "./Numbers.css";
import { FaElementor } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";

export const Numbers = () => {
  return (
    <div className="container">
      <div className="statistics">
        <div className="col-md-4 col-sm-12 mb-4 numbers">
          <FaElementor className="icon" />
          <div className="inner-number">
            <div className="header">3,000</div>
            <div className="sub-header">Inquiries</div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mb-4 numbers">
          <FaUser className="icon" />
          <div className="inner-number">
            <div className="header">500</div>
            <div className="sub-header">Registered Users</div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mb-4 numbers">
          <FaChartBar className="icon" />
          <div className="inner-number">
            <div className="header">1000+ </div>
            <div className="sub-header">Bookings</div>
          </div>
        </div>
      </div>
    </div>
  );
};
