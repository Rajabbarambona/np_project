{
  /*import React, { useState } from "react";
import "./Form.css";
import SignUp from "./SignUp";
import PersonalInfo from "./SignIn";
import OtherInfo from "./OtherInfo";

export const Form= () => {
  const [page, setPage] = useState(0);
  const FormTitles = ["SignUp", "Personal Info", "Other"];

  const PageDisplay = () => {
    if (page == 0) {
      return <SignUp />;
    } else if (page == 1) {
      return <PersonalInfo />;
    } else {
      return <OtherInfo />;
    }
  };

  return (
    <div className="form">
      <div className="progessbar"></div>
      <div>style={{width=page == 0 ? "33.3%":page ==1 ? "66.6%":"100%"}}</div>
      <div className="formcontainer"></div>
      <div className="header">
        <h1>FormTitles{[page]}</h1>
      </div>
      <div className="body">{PageDisplay()}</div>
      <div className="footer">
        <button
          disabled={page == 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </button>
        <button
          disabled={page == FormTitles.length - 1}
          onClick={() => {
            setPage((currPage) => currPage + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

//export default Form;*/
}
