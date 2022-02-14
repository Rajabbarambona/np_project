import { Link } from "react-router-dom";

export const HeaderBottom = () => {
  return (
    <div className="header__bottom">
      <nav className="links">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="tourpackages">Tour Packages</Link>
        <Link to="privacypolicy">Privacy Policy</Link>
        <Link to="termsofuse">Terms of use</Link>
        <Link to="contactUs">Contact Us</Link>
        <Link to="inquiry">Inquiry</Link>
      </nav>
    </div>
  );
};
