import React, { Fragment } from 'react';

const Create = () => {
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

          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="First Name"
                autoComplete="off"
                name="firstName"
                required
              // value={name}
              // onChange={e => onChange(e)}
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
              // value={name}
              // onChange={e => onChange(e)}
              />
            </div>

            <div className="form-group">
              <input
                className="form-control mb-3"
                type="email"
                placeholder="Email Address"
                name="email"
                autoComplete="off"
                // value={email}
                // onChange={e => onChange(e)}
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
              // value={password}
              // onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control mb-3"
                placeholder="Short Bio"
                name="bio"
                required
                maxLength="25"
              // value={password2}
              // onChange={e => onChange(e)}
              />
            </div>
            <input type="submit" className="btn
             btn-outline-primary btn-block my-3" value="Create" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Create;