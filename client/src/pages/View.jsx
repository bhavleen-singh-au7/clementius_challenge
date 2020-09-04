import React from 'react';

const View = () => {
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

            <tr>
              <td>Name</td>
              <td>Singh</td>
              <td>Singhname@gmail.com</td>
              <td>date</td>
              <td>short bio</td>
              <td>edit n delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default View;