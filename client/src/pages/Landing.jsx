import React from 'react';
import LandingImage from "../img/HomePage.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 text-center my-5">
          <h1 className="mb-5">Welcome to Full Stack App</h1>
          <div className="py-5">
            <Link to="/create" className="btn btn-outline-primary mr-5 my-5 px-5">Create</Link>
            <Link to="/view" className="btn btn-outline-secondary px-5">View</Link>
          </div>

        </div>
        <div className="col-lg-6 text-center">
          <img src={LandingImage} alt="landing-img" className="landing_img" />
        </div>
      </div>
    </div>
  );
};

export default Landing;