import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getViews } from "../../redux/actions/view";
import ViewItem from "./ViewItem";
import { ToastContainer } from "react-toastify";

const View = ({ getViews, view: { views }, }) => {

  const handleSort = (val) =>{
    console.log(val);
  }

  useEffect(() => {
    getViews();
  }, [getViews]);

  return (
    <div className="container">
      <ToastContainer />
      <h1 className="text-center mb-5">View Section</h1>
      <section className="mb-3 text-center">
        <input className="p-1 border border-success mx-2 rounded" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0 mr-5" type="submit">Search</button>
        <label htmlFor="sort" className="text-success">Sort:</label>
        <select 
        name="sort" 
        id="sort" 
        onChange={(e) => handleSort(e.target.value)}
        className="py-1 border border-success mr-2 rounded px-2 mx-2 text-success">
          <option value="">No Sort</option>
          <option value="lastName">Last Name</option>
          <option value="dob">D.O.B</option>
        </select>
      </section>
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