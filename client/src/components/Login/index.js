import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login({
  show,
  hide,
  validated,
  handleLogin,
  handleChange,
  username,
  password,
}) {
  return (
    <Modal show={show} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={(e) => handleLogin(e)}>
          <Form.Group controlId="username">
            <Form.Label>
              <strong>Username</strong>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              name="username"
              required
              onChange={handleChange}
              value={username}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a username.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>
              <strong>Password</strong>
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              onChange={handleChange}
              value={password}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a password.
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" type="reset" onClick={hide}>
          Cancel
        </Button>
        <a href="/forgot">Forgot password?</a>
      </Modal.Footer>
    </Modal>
  );
}

Login.propTypes = {
  show: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  validated: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default Login;
