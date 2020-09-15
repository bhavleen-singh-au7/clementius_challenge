import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { trash } from "../../redux/actions/view";
import Moment from "react-moment";

const ViewItem = ({
  // EditView,
  trash,
  view: {
    _id,
    firstName,
    lastName,
    email,
    dob,
    shortBio,
  },
  showActions,
}) => (
  <tr>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{email}</td>
    <td>
      <Moment format="DD/MM/YYYY">
        {dob}
      </Moment>
    </td>
    <td>{shortBio}</td>
    <td>
      {showActions && (
        <Fragment>
          <Link
            to={`views/${_id}`}
            className="btn btn-light rounded-circle shadow m-1">
            <i className="fa fa-edit"></i>
          </Link>
          {"  "}
          <button
            onClick={(e) => trash(_id)}
            type="button"
            className="btn btn-danger text-light rounded-circle shadow m-1">
            <i className="fa fa-trash"></i>
          </button>
        </Fragment>
      )}
    </td>
  </tr>
);

ViewItem.defaultProps = {
  showActions: true,
};

ViewItem.propTypes = {
  // EditView: PropTypes.object.isRequired,
  edit: PropTypes.func.isRequired,
  trash: PropTypes.func.isRequired,
};

export default connect(null, {
  trash
})(ViewItem);
