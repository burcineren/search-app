import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import logo from "../assets/images/tesodev.png";
import Errors from "./Errors";
import { Button } from "./UI/Button";
import { Input } from "./UI/Input";
import { setError } from "../features/ErrorSlice";

function AddRecordForm() {
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    Name: "",
    Country: "",
    City: "",
    Email: "",
    WebSite: "",
  });
  const [errors, setErrors] = useState({
    Name: "",
    Country: "",
    City: "",
    Email: "",
    WebSite: "",
  });

  function onValidate(submittedData: any) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    let valid = true;
    const newErrors = {
      Name: "",
      Country: "",
      City: "",
      Email: "",
      WebSite: "",
    };

    if (submittedData.Name.length < 4 || submittedData.Name.length > 60) {
      let message = "Name and surname should contain at least 4 characters";
      setErrorToState(message);
      newErrors.Name = message;
      valid = false;
    }

    if (submittedData.Country.length < 2 || submittedData.Country.length > 40) {
      let message = "Country should contain at least 2 characters";
      setErrorToState(message);
      newErrors.Country = message;
      valid = false;
    }

    if (submittedData.City.length < 2 || submittedData.City.length > 40) {
      let message = "City should contain at least 2 characters";
      setErrorToState(message);
      newErrors.City = message;
      valid = false;
    }

    if (regex.test(submittedData.Email) === false) {
      let message = "Incorrect email";
      setErrorToState(message);
      newErrors.Email = message;
      valid = false;
    }

    if (urlPattern.test(submittedData.WebSite) === false) {
      let message = "Incorrect website";
      setErrorToState(message);
      newErrors.WebSite = message;
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      document
        .querySelectorAll(".text-input")
        .forEach((input) => (input.value = ""));
      setDisabled(true);
    }
  }

  function setErrorToState(message: any) {
    let errorData = {
      message: message,
      visibility: true,
    };
    dispatch(setError(errorData));
  }

  function setDisableControl() {
    if (
      !data.Name ||
      !data.Country ||
      !data.City ||
      !data.Email ||
      !data.WebSite
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }

  return (
    <div className="add-new-container">
      <div className="input-header">
        <Link to="/">
          <img src={logo} alt="tesodev" />
        </Link>
        <div className="return-page">
          <Link to={-1}>
            <div className="return-button-container">
              <BsArrowLeft />
              <p>Return to List Page</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="input-container">
        <div className="input-content-container">
          <label>Name Surname</label>
          <div className="input-items">
            <Input
              type="text"
              className={`text-input ${errors.Name ? "input-error" : ""}`}
              onChange={(e) => {
                setData({ ...data, Name: e.target.value });
                setDisableControl();
              }}
            />
            {errors.Name && <p className="error-message">{errors.Name}</p>}
          </div>
          <label>Country</label>
          <div className="input-items">
            <Input
              type="text"
              className={`text-input ${errors.Country ? "input-error" : ""}`}
              onChange={(e) => {
                setData({ ...data, Country: e.target.value });
                setDisableControl();
              }}
            />
            {errors.Country && (
              <p className="error-message">{errors.Country}</p>
            )}
          </div>
          <label>City</label>
          <div className="input-items">
            <Input
              type="text"
              className={`text-input ${errors.City ? "input-error" : ""}`}
              onChange={(e) => {
                setData({ ...data, City: e.target.value });
                setDisableControl();
              }}
            />
            {errors.City && <p className="error-message">{errors.City}</p>}
          </div>
          <label>Email</label>
          <div className="input-items">
            <Input
              type="text"
              className={`text-input ${errors.Email ? "input-error" : ""}`}
              onChange={(e) => {
                setData({ ...data, Email: e.target.value });
                setDisableControl();
              }}
            />
            {errors.Email && <p className="error-message">{errors.Email}</p>}
          </div>
          <label>WebSite</label>
          <div className="input-items">
            <Input
              type="text"
              className={`text-input ${errors.WebSite ? "input-error" : ""}`}
              onChange={(e) => {
                setData({ ...data, WebSite: e.target.value });
                setDisableControl();
              }}
            />
            {errors.WebSite && (
              <p className="error-message">{errors.WebSite}</p>
            )}
          </div>
          <div className="button-container">
            <Button
              text="Add"
              className={`primary-button ${disabled ? "inactive" : ""}`}
              disabled={disabled}
              onClick={() => {
                onValidate(data);
              }}
            />
          </div>
        </div>
      </div>
      <div className="error-container">
        <Errors />
      </div>
    </div>
  );
}

export default AddRecordForm;
