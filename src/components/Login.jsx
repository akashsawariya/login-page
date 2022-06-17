import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  // const [email, setEmail] = useState("eve.holt@reqres.in");
  // const [password, setPassword] = useState("5cityslicka");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://reqres.in/api/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        alert("Successfully login");
        console.log(res?.data?.token);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="row  login">
      <div className="col-md-5 col-xl-5 col-sm-12 ">
        <form className="container w-75 h-75 form">
          <div className="text-center">
            <h2>Welcome Back</h2>
            <p>Sub-title text goes here</p>
          </div>
          <div className="form-group mb-3">
            <input
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              placeholder="Email Address*"
            />
          </div>
          <div className="form-group">
            <input
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              placeholder="Password*"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block btn-submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <div className="d-flex justify-content-between">
            <div className="form-check d-inline">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label text" htmlFor="defaultCheck1">
                Remember Password
              </label>
            </div>
            <a href="#" className="text">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
      <div className="col-7  d-none d-md-block d-xl-block bg-back">
        {/* <img src={bgImg} /> */}
      </div>
    </div>
  );
};

export default Login;
