import React, { Component } from 'react';
import SiteWrapper from './SiteWrapper';
import ReactTable from 'react-table';
import Api from '../utils/api';

export default class Performances extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { accessor: 'name', Header: 'Name', style: { whiteSpace: 'unset' } },
        {
          accessor: 'description',
          Header: 'Description',
          style: { whiteSpace: 'unset' },
        },
        {
          id: 'startDate',
          accessor: (d) => {
            const dt = new Date(d.startDate);
            return `${dt.toDateString()} @ ${dt.toLocaleTimeString()}`;
          },
          Header: 'Date Performed',
          style: { whiteSpace: 'unset' },
        },
      ],
      data: [],
      pages: -1,
      defaultPageSize: 10,
      loading: false,
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(state, instance) {
    this.setState({ loading: true });

    Api.listPerformances(state.pageSize, state.page)
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
        <h2 className="mb-4">Concerts &amp; Events</h2>
        <ReactTable
          columns={columns}
          data={data}
          pages={pages}
          loading={loading}
          minRows={minRows}
          onFetchData={this.fetchData}
          manual
          sortable={false}
          defaultPageSize={defaultPageSize}
          className="-striped -highlight"
        />
      </SiteWrapper>
    );
  }
}
