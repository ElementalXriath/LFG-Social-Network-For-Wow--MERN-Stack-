import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';
import Table from 'react-bootstrap/Table';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map(exp => (
    <tr key={exp._id} className="bg-dark sign">
      <td>{exp.title}</td>
      <td className="hide-sm">{exp.company}</td>
      <td>
        $ {exp.location}
      </td>
      <td>
        <button
          onClick={() => deleteExperience(exp._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2 sign">Resources</h2>
      <Table striped bordered hover className="table">
        <thead className="outline">
          <tr>
            <th scope="col">Item Name</th>
            <th scope="col" className="hide-sm">Quanity</th>
            <th scope="col" className="hide-sm">Price USD</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </Table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(Experience);
