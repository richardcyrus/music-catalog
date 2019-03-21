import React, { Component } from 'react';
import ReactTable from 'react-table';
import Api from '../utils/api';

export default class usersTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        {
          accessor: 'userLogin',
          Header: 'Login name',
          style: { whiteSpace: 'unset', textAlign: 'center' },
        },
        {
          accessor: 'userEmail',
          Header: 'e-mail',
          style: { whiteSpace: 'unset', textAlign: 'center' },
        },
        {
          id: 'userRegistered',
          accessor: (row) => {
            const dt = new Date(row.userRegistered);
            return `${dt.toDateString()}`;
          },
          Header: 'Date Registered',
          width: 150,
          style: { whiteSpace: 'unset' },
        },
        {
          id: 'userActive',
          accessor: (row) => (row.userActive === 0 ? 'No' : 'Yes'),
          Header: 'Enabled?',
          width: 75,
          style: { textAlign: 'center' },
        },
        {
          id: 'userApproved',
          accessor: (row) => (row.userApproved === 0 ? 'No' : 'Yes'),
          Header: 'Approved?',
          width: 130,
          style: { textAlign: 'center' },
        },
        {
          accessor: 'roles',
          Header: 'Roles',
        },
      ],
      data: [],
      pages: -1,
      loading: false,
      defaultPageSize: 10,
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(state, instance) {
    this.setState({ loading: true });

    Api.listUsers(state.pageSize, state.page).then((res) => {
      this.setState({
        data: res.data.rows,
        pages: res.data.pages,
        loading: false,
      });
    });
  }

  render() {
    const {
      columns,
      data,
      pages,
      loading,
      pageSize,
      defaultPageSize,
    } = this.state;

    // minRows will remove empty rows if there aren't enough rows to meet
    // the defaultPageSize.
    const minRows =
      data.length > 0 && data.length < defaultPageSize ? data.length : pageSize;

    return (
      <React.Fragment>
        <h2 className="mb-4">Current Users</h2>
        <ReactTable
          columns={columns}
          data={data}
          pages={pages}
          loading={loading}
          onFetchData={this.fetchData}
          minRows={minRows}
          manual
          sortable={false}
          defaultPageSize={defaultPageSize}
          className="-striped -highlight"
        />
      </React.Fragment>
    );
  }
}
