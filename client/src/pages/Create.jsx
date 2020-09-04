import React, { Fragment, useState } from 'react';
import { createUser } from "../redux/actions/createUser";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../redux/actions/alert";
import PropTypes from 'prop-types';

const Create = ({ setAlert, createUser }) => {

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

    console.log("hello");
    createUser({ firstName, lastName, email, dob, shortBio });

    return <Redirect to="/view" />;
  };

  return (
    <Fragment>
      <div className="d-flex justify-content-center">
        <div className="text-center p-5 shadow-lg p-3 mb-5 color rounded-lg">
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
                maxLength="25"
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
  createUser: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, createUser })(Create);