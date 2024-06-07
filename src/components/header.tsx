import * as React from "react";

import Logo from "../assets/images/tesodev.png";
import { useNavigate } from "react-router-dom";
import { Button } from "./UI/button";
export function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="button-wrapper">
        <Button
          className="primary-button"
          text="Add new record"
          type="search"
          onClick={() => {
            navigate("/add-new");
          }}
        />
      </div>
      <div className="container">
        <div className="image-wrapper">
          <img src={Logo} alt="tesodev" />
          <h3>Search App</h3>
        </div>
        <div className="search-wrapper">
          <h1>Find in records</h1>
        
        </div>
      </div>
    </div>
  );
}
