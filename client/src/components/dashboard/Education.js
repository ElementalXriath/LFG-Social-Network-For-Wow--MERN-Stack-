import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';
import Table from 'react-bootstrap/Table';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map(edu => (
    <tr key={edu._id} className="bg-dark">
      <td>{edu.school}</td>
      <td className="hide-sm">{edu.degree}</td>
      <td>$ {edu.fieldofstudy}
      </td>
      <td>
        <button
          onClick={() => deleteEducation(edu._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2 sign">Vendor Stock</h2>
      <Table bordered striped hover className="table">
        <thead>
          <tr>
            <th  scope="col" >Item Name</th>
            <th scope="col" className="hide-sm">Quanity</th>
            <th scope="col" className="hide-sm">Price USD</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </Table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEducation }
)(Education);
