import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const ProfileItem = ({
  profile: {
    user: { _id, name,},
    status,
    skills,
    location,
 

  }
}) => {
  return (
    <div className='profile bg-dark outline'>
     
      <div>
        <h2>{name}</h2>
        <h4> " {location} " </h4>
        <hr/>
        <p>
          Server: {status}
        </p>
        <Link to={`/profile/${_id}`} className='btn btn-light'>
         See Store
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check' /> {skill}
          </li>
        ))}
        
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
