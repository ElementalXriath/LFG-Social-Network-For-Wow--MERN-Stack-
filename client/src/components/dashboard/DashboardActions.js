import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary' /> Edit Profile
      </Link>
      <Link to='/add-experience' className='btn btn-light'>
        <i className='fas fa-coins text-primary' /> Add Resources
      </Link>
      <Link to='/add-education' className='btn btn-light'>
        <i className='fas fa-hat-wizard text-primary' /> Add Items
      </Link>
    </div>
  );
};

export default DashboardActions;
