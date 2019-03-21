import React, { Component } from 'react';
import SiteWrapper from './SiteWrapper';
import UsersTable from '../components/usersTable';
import AddUser from '../components/forms/addUser';

export default class Users extends Component {
  render() {
    const { match } = this.props;
    return (
      <SiteWrapper {...this.props}>
        {match.url === '/users' ? <UsersTable /> : null}
        {match.url === '/users/add' ? (
          <React.Fragment>
            <h1>Add User</h1>
            <AddUser {...this.props} />
          </React.Fragment>
        ) : null}
      </SiteWrapper>
    );
  }
}
