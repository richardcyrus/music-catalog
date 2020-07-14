import React, { Component } from 'react';
import SiteWrapper from './SiteWrapper';
import ReactTable from 'react-table-v6';
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
          filterable: true,
        },
        {
          accessor: 'familyName',
          Header: 'Last Name',
          style: { whiteSpace: 'unset' },
          filterable: true,
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
          filterable: true,
        },
        {
          accessor: 'pronoun',
          Header: 'Pronoun',
          filterable: true,
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

    let queryParams;
    const { pageSize, page, filtered } = state;

    // If the user types in a filter box, process here and add to the query.
    const filterParams = { column: '', value: '' };
    if (filtered.length > 0) {
      filtered.forEach((col) => {
        filterParams.column = col.id;
        filterParams.value = col.value;
      });
    }

    // Only add the filter if the value has more than 2 characters
    // Poor man's debounce (for now).
    if (filterParams.column.length > 0 && filterParams.value.length > 2) {
      queryParams = {
        pageSize,
        page,
        ...filterParams,
      };
    } else {
      queryParams = {
        pageSize,
        page,
      };
    }

    Api.listMembers(queryParams)
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
