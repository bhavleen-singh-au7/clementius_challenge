import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { EditAView } from "../redux/actions/view";
import { Redirect } from "react-router-dom";
import {
  ToastContainer,
  toast,
} from "react-toastify";

const EditView = () => {
  return (
      <form
        className="form-inline"
        >
        <div className="form-group">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="First Name"
            autoComplete="off"
            name="firstName"
            required
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
          />
        </div>

        <div className="form-group">
          <input
            className="form-control mb-3"
            type="email"
            placeholder="Email Address"
            name="email"
            autoComplete="off"
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
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control mb-3"
            placeholder="Short Bio"
            name="shortBio"
            required
            maxLength="100"
          />
        </div>
        <button
          type="button"
          className="btn btn-outline-success rounded-circle shadow m-1">
          <i className="fa fa-check"></i>
        </button>
      </form>
  );
};

EditView.propTypes = {
  // setAlert: PropTypes.func.isRequired,
  EditAView: PropTypes.func.isRequired,
};

export default connect(null, {})(EditView);
