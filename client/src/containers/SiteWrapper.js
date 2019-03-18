import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

class SiteWrapper extends Component {
  render() {
    return (
      <Fragment>
        <Navbar bg="dark" variant="dark" expand="sm">
          <Link to="/">Your Score</Link>
          <Navbar.Toggle aria-controls="ys-navbar-nav" />
          <Navbar.Collapse id="ys-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer
                to="/"
                activeClassName="active"
                className="nav-link"
              >
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer
                to="/library"
                activeClassName="active"
                className="nav-link"
              >
                <Nav.Link>Library</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link onClick={this.props.handleLogout}>Logout</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>{this.props.children}</Container>
        <footer className="mt-4 footer">
          <Container>
            <p>YourScore 2019</p>
          </Container>
        </footer>
      </Fragment>
    );
  }
}

export default SiteWrapper;
