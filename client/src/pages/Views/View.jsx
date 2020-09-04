import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getViews } from "../../redux/actions/view";
import ViewItem from "./ViewItem";

const View = ({ getViews, view: { views } }) => {
  
  useEffect(() => {
    getViews();
  }, [getViews]);

  return (
    <div className="container">
      <h1 className="text-center mb-5">View Section</h1>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>D.O.B</th>
              <th>Short Bio</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              views.map(view => (
                <ViewItem key={view._id} view={view} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

View.propTypes = {
  getViews: PropTypes.func.isRequired,
  view: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  view: state.view
});

export default connect(
  mapStateToProps,
  { getViews })(View);