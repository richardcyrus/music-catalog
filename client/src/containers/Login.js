import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import LoginForm from '../components/forms/loginForm';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <LoginForm {...this.props} />
      </Container>
    );
  }
}
