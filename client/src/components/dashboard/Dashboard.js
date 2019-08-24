import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large landingmid one'>Dashboard</h1>
      <p className='lead sign'>
        <i className='fas fa-user sign' /> Welcome,  {user && user.name}
      </p>
      <a href="https://discord.gg/GMX26zr" className="btn btn-light"> <i class="fab fa-discord"></i> Your Discord Link - Enter the Bilgewater Cartel</a> 
      <hr/>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />

          <div className='my-2'>
            <button className='btn btn-danger' onClick={() => deleteAccount()}>
              <i className='fas fa-user-minus' /> Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p className="sign">You have not yet setup a account, please add some info... We will need no personal information. This is our user safty policy to keep your data to a minium. All payments will be completed Via Cash App so they are instant , safe , and desputable. All verbal transaction data will be done in our private discord channle. Simply because Discord is easy to use and encrypted well.</p>
          <h4 className="money">Requirements</h4>
          <h6 className="money">- Discord App an ID </h6>
          <h6 className="money">- Cash App and ID </h6>
          <Link to='/create-profile' className='btn btn-light my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
