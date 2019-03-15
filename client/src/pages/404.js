import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class NotFound extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <Container fluid={true}>
        <Row>
          <Col md={12}>
            <Col md={8} className="mx-auto text-center">
              <span className="forbidden-span text-center">404</span>
              <span className="forbidden-text">Not Found</span>
            </Col>
            <Col md={6} className="right-image-div mr-auto" />
            <Col md={6} className="left-nf-div ml-auto text-center">
              <span className="forbidden-text">
                It appears this page is empty. Try
                {isAuthenticated ? (
                  <Link className="home-image-link" to="/home">
                    here
                  </Link>
                ) : (
                  <Link className="home-image-link" to="/">
                    here
                  </Link>
                )}
                instead.
              </span>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

NotFound.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { isAuthenticated } = state.authentication;
  return {
    isAuthenticated,
  };
}

export default connect(mapStateToProps)(NotFound);
