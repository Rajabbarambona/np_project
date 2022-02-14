import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";

export const HeaderMiddle = () => {
  return (
    <>
      <div className="headerMiddle">
        <div className="middleInnerLeft">
          <Link to="/">
            East Africa <span>Tourism</span>
          </Link>
        </div>
        <div className="lock_safety">
          <FaLock className="lock" />
          <div className="safety">
            <span className="safe_secure">SAFE &amp; SECURE</span>
          </div>
        </div>
      </div>
    </>
  );
};
