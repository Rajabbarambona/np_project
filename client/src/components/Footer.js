import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaTwitterSquare,
  FaInstagramSquare,
  FaGooglePlus,
  FaWhatsappSquare,
  FaTiktok,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="contacts">
      <div className="footer-icons">
        <FaFacebook />
        <FaTwitterSquare />
        <FaInstagramSquare />
        <FaGooglePlus />
        <FaWhatsappSquare />
        <FaTiktok />
      </div>
      <div>
        <span>© 2022 Rajab. All Rights Reserved</span>
      </div>
    </div>
  );
};
