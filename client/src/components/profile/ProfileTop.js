import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../img/logo.jpg';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar }
  }
}) => {
  return (
    <div className='profile-top bg-dark outline p-2'>
      <img className='round-img my-1' src={logo} alt='' />
      <h1 className='large'>{name}</h1>
      <p className='lead'>
        Server : {status}
      </p>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
