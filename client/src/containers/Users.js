import React, { Component } from 'react';
import SiteWrapper from './SiteWrapper';
import UsersTable from '../components/usersTable';
import AddUser from '../components/forms/addUser';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Users extends Component {
  render() {
    const { match } = this.props;
    return (
      <SiteWrapper {...this.props}>
        {match.url === '/users' ? <UsersTable /> : null}
        {match.url === '/users/add' ? (
          <Row className="justify-content-center">
            <Col md="6">
              <h1 className="text-center">Add User</h1>
              <AddUser {...this.props} />
            </Col>
          </Row>
        ) : null}
      </SiteWrapper>
    );
  }
}
