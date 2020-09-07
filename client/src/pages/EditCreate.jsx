import React, { Fragment, useState } from 'react';
import { createUser } from "../redux/actions/createUser";
import { setAlert } from "../redux/actions/alert";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Create = ({ createUser }) => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    shortBio: ""
  });

  const { firstName, lastName, email, dob, shortBio } = formData;

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    createUser({ firstName, lastName, email, dob, shortBio });

    toast.success("User Created");

    setFormData({
      ...formData,
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      shortBio: ""
    });
  };

  return (
    <Fragment>
      <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2">
        <ToastContainer />
        <div className="text-center mx-2 p-5 shadow-lg color rounded-lg">
          <h1 className="display-3 font-weight-bold">User</h1>

          <h3 className="py-3">
            <i className="fa fa-user-plus"></i>
            {"  "}
            Create Your Account
         </h3>

          <form onSubmit={e => handleSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="First Name"
                autoComplete="off"
                name="firstName"
                required
                value={firstName}
                onChange={e => handleChange(e)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Last Name"
                autoComplete="off"
                name="lastName"
                required
                value={lastName}
                onChange={e => handleChange(e)}
              />
            </div>

            <div className="form-group">
              <input
                className="form-control mb-3"
                type="email"
                placeholder="Email Address"
                name="email"
                autoComplete="off"
                value={email}
                onChange={e => handleChange(e)}
                required
              />
            </div>

            <div className="form-group">
              <input
                className="form-control mb-3"
                type="date"
                placeholder="DOB"
                name="dob"
                required
                value={dob}
                onChange={e => handleChange(e)}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control mb-3"
                placeholder="Short Bio"
                name="shortBio"
                required
                maxLength="100"
                value={shortBio}
                onChange={e => handleChange(e)}
              />
            </div>
            <input type="submit" className="btn
             btn-outline-primary btn-block my-4" value="Create" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

Create.propTypes = {
  setAlert: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired
};

export default connect(null, { setAlert, createUser })(Create);