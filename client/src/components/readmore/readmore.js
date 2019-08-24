import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'bootstrap-4-react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Readmore = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Container>
      <h1 className="landingmid one">Cartel Guide</h1> 
      <hr/>
        <Row>
          <Col>
          <Card>
            <Card.Header className="bg-dark h3">Step 1 : Create an Account</Card.Header>
            <Card.Body className="bg-dark">
              <Card.Title>No personal Information Required : </Card.Title>
              <Card.Text>
                Click the Join Cartel and register and account. This account is merely a formailty and invintaion to our Discord channle and a net work for users to see whats available on our platform. Which you will also need a discord account to continue further. 
              </Card.Text>
              <Button className="btn btn-light">Join the Cartel</Button>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col>
          <Card>
            <Card.Header className="bg-dark h3">Step 2 : Join the Discord | Bilgewater Cartel</Card.Header>
            <Card.Body className="bg-dark">
              <Card.Title>Discord Invite Link Provided after Registration : </Card.Title>
              <Card.Text>
                Once in the Discord you may join the Group associated with your World of Warcraft Server. | Example : server-thrall-vendors | Within the groups users may post to a limited amount items in which they intent to sell. As a buyer you may browse and choose which item you intend to purchase. Once communticaiton has been established post your transaction in the transaction group. (A pre-fixed text will be provided). 
              </Card.Text>
              <Button className="btn btn-light">Discord</Button>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col>
          <Card>
            <Card.Header className="bg-dark h3">Step 3 : Transaction Proccess | Cash App Required</Card.Header>
            <Card.Body className="bg-dark">
              <Card.Title>We will handle all transactions in game and payment related : </Card.Title>
              <Card.Text>
               Within each available server we have Cartel Admin that will request the item in which is being sold. Once the item is recieved from the vendor we wait to recieve payment to our cash app account from buyer. Once payment is recieved we distrabute the payment to vendor and item's to buyer. A completed transaction will be posted in the transaction admin discord group. Your transaction request will then be dumped.
              </Card.Text>
              <Button className="btn btn-light">Discord</Button>
            </Card.Body>
          </Card>
          </Col>
        </Row>
    </Container>
  );
};

Readmore.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Readmore);
