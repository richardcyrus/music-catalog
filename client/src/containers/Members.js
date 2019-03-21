import React, { Component } from 'react';
import SiteWrapper from './SiteWrapper';
import ReactTable from 'react-table';
import Api from '../utils/api';

export default class Members extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        {
          accessor: 'givenName',
          Header: 'First Name',
          style: { whiteSpace: 'unset' },
        },
        {
          accessor: 'familyName',
          Header: 'Last Name',
          style: { whiteSpace: 'unset' },
        },
        {
          accessor: 'emailAddress',
          Header: 'e-mail',
          style: { whiteSpace: 'unset' },
        },
        {
          accessor: 'phoneNumber',
          Header: 'Phone Number',
        },
        {
          accessor: 'vocalRange',
          Header: 'Vocal Range',
        },
        {
          accessor: 'pronoun',
          Header: 'Pronoun',
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

    Api.listMembers(state.pageSize, state.page)
      .then((res) => {
        this.setState({
          data: res.data.rows,
          pages: res.data.pages,
          loading: false,
        });
      })
      .catch((err) => console.log(err));
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
      <SiteWrapper {...this.props}>
        <h2 className="mb-4">Member List</h2>
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
      </SiteWrapper>
    );
  }
}
