import React, { Fragment, useState } from 'react';
// import { createUser } from "../redux/actions/createUser";
// import { setAlert } from "../redux/actions/alert";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
// import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Create = ({ updateUser }) => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    shortBio: ""
  });

  const { firstName, lastName, email, dob, shortBio } = formData;

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleUpdate = async e => {
    e.preventDefault();

    updateUser({ firstName, lastName, email, dob, shortBio });

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
          <form 
          className="form-inline"
          onSubmit={e => handleUpdate(e)}
          >
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
            <button
              onClick={e => update(_id)}
              type="button"
              className="btn btn-outline-success rounded-circle shadow m-1"
            >
              <i className="fa fa-check"></i>
            </button>
          </form>
    </Fragment>
  );
};

Create.propTypes = {
  setAlert: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired
};

export default connect(null, { setAlert, createUser })(Create);