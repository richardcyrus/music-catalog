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
      loading: false,
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(state, instance) {
    this.setState({ loading: true });

    console.log(`Page Size: ${state.pageSize}`);
    console.log(`Page: ${state.page}`);
    console.log('Sorted: ', state.sorted);
    console.log('Filtered: ', state.filtered);

    Api.findPerformances(state.pageSize, state.page).then((res) => {
      this.setState({
        data: res.data.data,
        pages: res.data.pages,
        loading: false,
      });
    });
  }

  render() {
    const { columns, data, pages, loading } = this.state;

    return (
      <SiteWrapper {...this.props}>
        <ReactTable
          columns={columns}
          data={data}
          pages={pages}
          loading={loading}
          onFetchData={this.fetchData}
          manual
          sortable={false}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </SiteWrapper>
    );
  }
}
