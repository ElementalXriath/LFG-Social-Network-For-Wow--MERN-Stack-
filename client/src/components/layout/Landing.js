import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='dark-overlay outline'>
        <div className='landing-inner'>
          <h1 className='x-large one'>Bilgewater Cartel</h1>
          <p className='lead one'>
           Buy and Sell  <br/><span className="landingmid">World Of Warcraft CLASSIC</span> Gold, Mounts, BOE's, Carrys for <span className="money">Real Money</span>. <br/>
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-light'>
              Join The Cartel
            </Link>
            <Link to='/login' className='btn btn-light'>
              Log In
            </Link>
            <Link to='/readmore' className='btn btn-light'>
              Learn More
            </Link>
            <br/>
            <small>All Data is Encrypted , please read selling guide.</small>
            <hr/>
            <h6>" We the Cartel are the <a href="https://www.investopedia.com/terms/t/third-party-transaction.asp"> Third Party Medium </a> that ensures all transactions are completed. The Cartel does not condone bad buisness. Vendor gives us the loot which we pass to buyer for the payment which we pass to the Vendor. 
              We only use Cash App for security reasons and to pass payments instantly and safely. You will need <a href="https://cash.app/"> Cash App </a>to user our platform. "<br/><br/>
           " No Powerlevling services will be sold, we do not condone sharing account information and it will not be allowed. " <br/> <span>- Trade Prince Gallywix</span></h6>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
