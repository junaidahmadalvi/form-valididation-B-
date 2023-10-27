import React, { useState } from "react";

import "./style.css";

const FormValidation = () => {
  return <>{/* <HtmlFormValidationComponent /> */}</>;
};

export default FormValidation;

const HtmlFormValidationComponent = () => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;

  const [formData, setFormData] = useState({
    text: "",
    password: "",
    date: "",
    email: "",
    number: "",
    search: "",
    url: "",
    week: "",
    file: "",
  });

  const [error, setError] = useState({
    text: "",
    password: "",
    date: "",
    email: "",
    number: "",
    search: "",
    url: "",
    week: "",
    file: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setError((state) => ({
      ...state,
      [name]: "", // Clear the error for the current input field
    }));
  };

  const errorHandler = () => {
    // return true
    // return false
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // check errors

    if (errorHandler()) {
    }

    if (formData.text === "") {
      setError((state) => ({ ...state, text: "Text is required" }));
      return;
    } else if (formData.text.length <= 2) {
      setError((state) => ({
        ...state,
        text: "Please enter at least 3 characters for Text",
      }));
      return;
    }

    if (formData.password === "") {
      setError((state) => ({ ...state, password: "Password is required" }));
      return;
    } else if (!passwordRegex.test(formData.password)) {
      setError((state) => ({ ...state, password: "Invalid password" }));
      return;
    }

    if (formData.date === "") {
      setError((state) => ({ ...state, date: "Date is required" }));
      return;
    }

    if (formData.email === "") {
      setError((state) => ({ ...state, email: "Email is required" }));
      return;
    } else if (!emailRegex.test(formData.email)) {
      setError((state) => ({ ...state, email: "Invalid email" }));
      return;
    }

    if (formData.number === "") {
      setError((state) => ({ ...state, number: "Number is required" }));
      return;
    }
    if (formData.search === "") {
      setError((state) => ({ ...state, search: "Search is required" }));
      return;
    }

    if (formData.url === "") {
      setError((state) => ({ ...state, url: "URL is required" }));
      return;
    } else if (!urlRegex.test(formData.url)) {
      setError((state) => ({ ...state, url: "Invalid URL" }));
      return;
    }

    if (formData.week === "") {
      setError((state) => ({ ...state, week: "Week is required" }));
      return;
    }

    // if (formData.file === "") {
    //   setError((state) => ({ ...state, file: "File is required" }));
    // }

    console.log("formData", formData);
  };

  return (
    <>
      {/* {console.log("formData", formData)  } */}
      <div className="main-Container">
        <div className="sub-container">
          <form onSubmit={handleSubmit} className="form">
            <h1>Handle Form</h1>
            <div className="form-group">
              <label htmlFor="text" className="label">
                Text:
              </label>
              <input
                style={{ border: error.text && "1px solid red" }}
                className="input"
                type="text"
                id="text"
                name="text"
                placeholder="Enter Text"
                value={formData.text}
                onChange={handleChange}
              />
              <span style={{ color: "red" }}>{error.text}</span>
              <br />

              <label htmlFor="password" className="label">
                Password:
              </label>
              <input
                style={{ border: error.password && "1px solid red" }}
                className="input"
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
              />
              <br />
              <span style={{ color: "red" }}>{error.password}</span>
              <label htmlFor="date" className="label">
                Date:
              </label>
              <input
                style={{ border: error.date && "1px solid red" }}
                className="input"
                type="date"
                id="date"
                name="date"
                placeholder="Enter Date"
                value={formData.date}
                onChange={handleChange}
              />
              <br />
              <span style={{ color: "red" }}>{error.date}</span>
              <label htmlFor="email" className="label">
                Email:
              </label>
              <input
                style={{ border: error.email && "1px solid red" }}
                className="input"
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
              />
              <br />
              <span style={{ color: "red" }}>{error.email}</span>
              <label htmlFor="number" className="label">
                Number:
              </label>

              <input
                style={{ border: error.number && "1px solid red" }}
                className="input"
                type="number"
                id="number"
                name="number"
                placeholder="Enter Number"
                value={formData.number}
                onChange={handleChange}
              />
              <br />
              <span style={{ color: "red" }}> {error.number}</span>
              <label htmlFor="search" className="label">
                Search:
              </label>

              <input
                style={{ border: error.search && "1px solid red" }}
                className="input"
                type="search"
                id="search"
                name="search"
                placeholder="Search"
                value={formData.search}
                onChange={handleChange}
              />
              <br />
              <span style={{ color: "red" }}>{error.search}</span>
              <label htmlFor="url" className="label">
                URL:
              </label>

              <input
                style={{ border: error.url && "1px solid red" }}
                className="input"
                type="url"
                id="url"
                name="url"
                placeholder="Enter URL"
                value={formData.url}
                onChange={handleChange}
              />
              <br />
              <span style={{ color: "red" }}>{error.url}</span>
              <label htmlFor="week" className="label">
                Week:
              </label>

              <input
                style={{ border: error.week && "1px solid red" }}
                className="input"
                type="week"
                id="week"
                name="week"
                placeholder="Enter Week"
                value={formData.week}
                onChange={handleChange}
              />
              <br />
              <span style={{ color: "red" }}>{error.week}</span>
              <label htmlFor="file" className="label">
                File:
              </label>

              <input
                // style={{ border: error.file && "1px solid red" }}
                className="input"
                type="file"
                id="file"
                value={formData.file}
                onChange={handleChange}
              />
              <br />
              {/* <span style={{ color: "red" }}>{error.file}</span> */}
              {/* <label htmlFor="range" className="label">
                Range:
              </label>

              <input
                className="input"
                type="range"
                id="range"
                name="range"
                onChange={handleRange}
              />
              <br />
              <label htmlFor="checkbox" className="label">
                Checkbox:
              </label>
              <input
                className="input"
                type="checkbox"
                id="checkbox"
                name="checkbox"
                onChange={handleCheckbox}
              />
              <br />
              <label htmlFor="radio" className="label">
                Radio:
              </label>

              <input
                className="input"
                type="radio"
                id="radio"
                name="radio"
                onChange={handleRadio}
              />
              <br /> */}

              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const FormikFormValidationComponent = () => {
  const handleSubmit = (data) => {
    data.preventDefault();
    console.log(data);
  };

  return (
    <>
      <div>
        <div>Handle Form</div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="text">Text:</label>
          <br />
          <input className="input" type="text" id="text" name="text" />
          <br />

          <label htmlFor="password">Password:</label>
          <br />
          <input type="password" id="password" name="password" />
          <br />

          <label htmlFor="checkbox">Checkbox:</label>
          <input type="checkbox" id="checkbox" name="checkbox" />
          <br />

          <label htmlFor="color">Color:</label>
          <br />
          <input type="color" id="color" name="color" />
          <br />

          <label htmlFor="date">Date:</label>
          <br />
          <input type="date" id="date" name="date" />
          <br />

          <label htmlFor="datetimeLocal">Datetime Local:</label>
          <br />
          <input
            type="datetime-local"
            id="datetimeLocal"
            name="datetimeLocal"
          />
          <br />

          <label htmlFor="email">Email:</label>
          <br />
          <input type="email" id="email" name="email" />
          <br />

          <label htmlFor="file">File:</label>
          <br />
          <input type="file" id="file" />
          <br />

          <label htmlFor="month">Month:</label>
          <br />
          <input type="month" id="month" name="month" />
          <br />

          <label htmlFor="number">Number:</label>
          <br />
          <input type="number" id="number" name="number" />
          <br />

          <label htmlFor="radio">Radio:</label>
          <br />
          <input type="radio" id="radio" name="radio" />
          <br />

          <label htmlFor="range">Range:</label>
          <br />
          <input type="range" id="range" name="range" />
          <br />

          <label htmlFor="search">Search:</label>
          <br />
          <input type="search" id="search" name="search" />
          <br />

          <label htmlFor="tel">Tel:</label>
          <br />
          <input type="tel" id="tel" name="tel" />
          <br />

          <label htmlFor="time">Time:</label>
          <br />
          <input type="time" id="time" name="time" />
          <br />

          <label htmlFor="url">URL:</label>
          <br />
          <input type="url" id="url" name="url" />
          <br />

          <label htmlFor="week">Week:</label>
          <br />
          <input type="week" id="week" name="week" />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

/* 
  -> Design the Form
  <form> 

  </form>
  

  1. Fill the form and save values in react state 
  2. Add validations 
  3. Error message show 
*/
