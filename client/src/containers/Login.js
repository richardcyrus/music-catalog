import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import LoginForm from '../components/forms/loginForm';
import logo from '../assets/YourScore-logo-white-02.svg';
import './login.css';

export default class Login extends Component {
  render() {
    return (
      <Container as="main" fluid className="login-page">
        <Row className="no-gutters">
          <Col md={8} lg={6} className="login-page__left">
            <div className="login-header py-5">
              <Container>
                <img src={logo} alt="YourScore" className="login-logo" />
                <br />
                <h1 className="login-tagline">
                  The simple way to track your music library
                </h1>
              </Container>
            </div>
            <div className="login d-flex align-items-center py-5">
              <Container>
                <Row>
                  <Col className="mx-auto" md={9} lg={8}>
                    <Card>
                      <Card.Title className="text-center pt-4">
                        <h3 className="login-heading mb-0">Welcome back!</h3>
                      </Card.Title>
                      <Card.Body>
                        <LoginForm {...this.props} />
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
          <Col
            className="login-page__right d-none d-md-flex bg-image"
            md={4}
            lg={6}
          />
        </Row>
      </Container>
    );
  }
}
