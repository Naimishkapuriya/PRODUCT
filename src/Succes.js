import React from "react";
import { Link } from "react-router-dom";

const Succes = () => {
  return (
    <div>
      <div className="main-container">
        <div className="check-container">
          <div className="check-background">
            <svg
              viewBox="0 0 65 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 25L27.3077 44L58.5 7"
                stroke="white"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="check-shadow"></div>
          <h1 className="success_h1">Success!</h1>
          <Link to="/" className="text_dnone btn1 btn2 me-2">
            {" "}
            Go to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Succes;
