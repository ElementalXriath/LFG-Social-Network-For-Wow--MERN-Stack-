import React, { useEffect, useState, Fragment } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import { InputGroup, Form, Row, Col, Button } from 'bootstrap-4-react';

const Createprofile = ({
  createProfile,
  getCurrentProfile,
  profile: { profile, loading },
  history,
}) => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
  });
  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };
  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCurrentProfile]);
  return loading && profile === null ? (
    <Redirect to='/dashboard' />
  ) : (
    <Fragment>
      <h1 className='large landingmid one'>Create Your Account</h1>
      <p className='lead sign'>
        <i className='fas fa-user' /> Let's get some information for our systems...
      </p>
      <small>* Required Note : We do not support private servers.</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
      <div className='form-group'> 
        <InputGroup mb="3">
          <InputGroup.PrependText>Server</InputGroup.PrependText>
          <Form.CustomSelect  name='status' value={status} onChange={e => onChange(e)}>
            <option value='0'>* Select Server</option>
            <option value='Thrall'>Thrall</option>
            <option value='Onyxia'>Onyxia</option>
            <option value='Darlarn'>Darlaran</option>
            <option value='Gul Dan'>Gul' Dan</option>
            <option value='War Hammer'>War Hammer</option>
          </Form.CustomSelect>
        </InputGroup>
          <small className='form-text'>
            We are only active in select servers , more to come.
          </small>
        </div>
      <div className='form-group'>
        <Row>
            <Form.LabelCol col="sm-2" htmlFor="staticEmail" className="landingmid">Slogan</Form.LabelCol>
            <Col col="sm-10">
            <input
            type='text'
            placeholder='Make your slogan...'
            name='location'
            value={location}
            onChange={e => onChange(e)}
          />
            </Col>
          </Row>
          <small className='form-text'>
        "Exp: Selling Rare Mounts "
          </small>
        </div>
        
        <div className='form-group'>
        <Row>
            <Form.LabelCol col="sm-2" htmlFor="staticEmail" className="landingmid">Discord ID : </Form.LabelCol>
            <Col col="sm-10">
            <input
            type='text'
            placeholder='Discord ID'
            name='website'
            value={website}
            onChange={e => onChange(e)}
          />
            </Col>
          </Row>
          <small className='form-text'>
        " NOTE: This will not be public, it is to send you the invite link to our channle "
          </small>
        </div>
        <div className='form-group'>
        <Row>
            <Form.LabelCol col="sm-2" htmlFor="staticEmail" className="landingmid">Cash App ID : </Form.LabelCol>
            <Col col="sm-10">
            <input
            type='text'
            placeholder='Cash App ID'
            name='company'
            value={company}
            onChange={e => onChange(e)}
          />
            </Col>
          </Row>
          <small className='form-text'>
        " NOTE: This will not be public, it is to send and recieve payments. All payments will be instant. We require no personal information. "
          </small>
        </div>
        <div className='form-group'>
        <Row>
            <Form.LabelCol col="sm-2" htmlFor="staticEmail" className="landingmid">Blizzard ID : </Form.LabelCol>
            <Col col="sm-10">
            <input
            type='text'
            placeholder='Cash App ID'
            name='githubusername'
            value={githubusername}
            onChange={e => onChange(e)}
          />
            </Col>
          </Row>
          <small className='form-text'>
          Blizzard Username : Note : This will not be public! So we can contact you in game . 
          </small>
        </div>
        <div className='form-group'>
        <InputGroup mb="3">
          <InputGroup.PrependText>Main-Profession</InputGroup.PrependText>
          <Form.CustomSelect name='skills' value={skills} onChange={e => onChange(e)}>
            <option selected>Choose...</option>
            <option value="Engineer">Engineer</option>
            <option value="Alchemist">Alchemist</option>
            <option value="Enchanter">Enchanter</option>
            <option value="Jewl Crafter">Jewl Crafter</option>
            <option value="Inscription">Inscription</option>
          </Form.CustomSelect>
        </InputGroup>
          <small className='form-text'>
            What is your main Profession...
          </small>
        </div>     
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

Createprofile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  profile: state.profile,
});
export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile },
)(withRouter(Createprofile));
