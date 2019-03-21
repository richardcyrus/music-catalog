import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'react-table/react-table.css';
import logo from '../assets/YourScore-logo-white-02.svg';

class SiteWrapper extends Component {
  constructor(props) {
    super(props);
    this.handleLink = this.handleLink.bind(this);
  }

  handleLink(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <Fragment>
        <Navbar
          sticky="top"
          bg="dark"
          variant="dark"
          expand="sm"
          collapseOnSelect
          className="mb-4"
        >
          <Navbar.Brand>
            <img
              src={logo}
              width="110"
              className="d-inline-block"
              alt="Your Score"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="ys-navbar-nav" />
          <Navbar.Collapse id="ys-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item>
                <NavLink
                  to="/"
                  exact
                  activeClassName="active"
                  className="nav-link"
                >
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="/library"
                  exact
                  activeClassName="active"
                  className="nav-link"
                >
                  Library
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="/performances"
                  exact
                  activeClassName="active"
                  className="nav-link"
                >
                  Performances
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="/members"
                  exact
                  activeClassName="active"
                  className="nav-link"
                >
                  Members
                </NavLink>
              </Nav.Item>
            </Nav>
            <Nav className="ml-auto">
              <NavDropdown title="Administer">
                <NavDropdown.Item onClick={() => this.handleLink('/users')}>
                  List Users
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.handleLink('/users/add')}>
                  Add User
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link onClick={this.props.handleLogout}>Logout</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container fluid as="main" className="main">
          <Container fluid>{this.props.children}</Container>
        </Container>
        <footer className="d-flex justify-content-center py-3 mt-4 footer bg-dark text-white">
          <Container fluid={true}>
            <p className="text-center m-0">&copy; 2019 YourScore</p>
          </Container>
        </footer>
      </Fragment>
    );
  }
}

export default SiteWrapper;
