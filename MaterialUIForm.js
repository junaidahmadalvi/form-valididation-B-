import React from "react";
import { useFormik } from "formik";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  TextField,
} from "@mui/material";

const MaterialUIForm = () => {
  const formik = useFormik({
    initialValues: {
      text: "",
      password: "",
      date: "",
      email: "",
      number: "",
      search: "",
      url: "",
      week: "",
      file: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log("=======", values);
    },
  });
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("=========", event);
  // };

  return (
    <>
      <Card
        className="card"
        sx={{
          minWidth: 275,
          border: "2px solid green",
          margin: "50px", // Set green border
        }}
      >
        <CardContent>
          {/* <div className="main-Container">
            <div className="sub-container"> */}
          <form onSubmit={formik.handleSubmit}>
            <h1>Handle Form</h1>
            <div className="form-group">
              <TextField
                className="input"
                label="Text"
                variant="outlined"
                name="text"
                onChange={formik.handleChange}
                value={formik.values.text}
              />
              <br />

              <TextField
                className="input"
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <br />

              <TextField
                className="input"
                label="Date"
                variant="outlined"
                type="date"
                name="date"
                onChange={formik.handleChange}
                value={formik.values.date}
              />
              <br />

              <TextField
                className="input"
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <br />

              <TextField
                className="input"
                label="Number"
                variant="outlined"
                type="number"
                name="number"
                onChange={formik.handleChange}
                value={formik.values.number}
              />
              <br />

              <TextField
                className="input"
                label="Search"
                variant="outlined"
                type="search"
                name="search"
                onChange={formik.handleChange}
                value={formik.values.search}
              />
              <br />

              <TextField
                className="input"
                label="URL"
                variant="outlined"
                type="url"
                name="url"
                onChange={formik.handleChange}
                value={formik.values.url}
              />
              <br />

              <TextField
                className="input"
                label="Week"
                variant="outlined"
                type="week"
                name="week"
                onChange={formik.handleChange}
                value={formik.values.week}
              />
              <br />

              {/* File input is not directly supported by TextField, you might need a different approach */}
              <input type="file" id="file" />
              <br />

              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </div>
          </form>
          {/* </div>
          </div> */}
        </CardContent>
        <CardActions>
          {/* <Button variant="contained" color="primary" type="submit">
            Submit
          </Button> */}
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    </>
  );
};

export default MaterialUIForm;
