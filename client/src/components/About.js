import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="container">
      <div className="inner-container">
        <h2 className="title">About Us</h2>
        <span className="welcome">
          Welcome to East Africa Tourism!!! Since then, our courteous and
          committed team members have always ensured a pleasant and enjoyable
          tour for the clients. We have got packages to suit the discerning
          traveler's budget and savor. Book your dream vacation online to
          discover the best regions in East Africa. Supported quality and
          proposals of our travel consultants, we have a tendency to welcome you
          to decide on from holidays packages and customize them according to
          your plan.
        </span>
        <div className="image-overview">
          <img src="/assets/images/umuco.jpg" alt="Umuco" />
          <img src="/assets/images/animals.jpg" alt="Animals" />
          <img src="/assets/images/ingoma1.jpg" alt="Ingoma" />
        </div>
      </div>
    </div>
  );
};
