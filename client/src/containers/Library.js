import React, { Component } from 'react';
import SiteWrapper from './SiteWrapper';
import Api from '../utils/api';
import ReactTable from 'react-table';

export default class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { accessor: 'title', Header: 'Title', style: { whiteSpace: 'unset' } },
        {
          accessor: 'composers',
          Header: 'Composers',
          style: { whiteSpace: 'unset' },
        },
        {
          accessor: 'arrangers',
          Header: 'Arranger',
          style: { whiteSpace: 'unset' },
        },
        {
          accessor: 'voices',
          Header: 'Voicing',
          style: { whiteSpace: 'unset' },
        },
        { accessor: 'style', Header: 'Style' },
        {
          accessor: 'occasions',
          Header: 'Occasion',
          style: { whiteSpace: 'unset' },
        },
        {
          accessor: 'quantityOnHand',
          Header: 'Copies',
          width: 64,
          style: { textAlign: 'right' },
        },
        {
          accessor: 'purchasePrice',
          Header: 'Cost',
          width: 64,
          style: { textAlign: 'right' },
        },
        {
          accessor: 'performances',
          Header: 'Date(s) Performed',
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

    Api.listLibrary(state.pageSize, state.page)
      .then((res) => {
        const rows = res.data.rows.map((record) => {
          return {
            ...record,
            occasions: record.occasions.map((o) => o.name).join(', '),
            composers: record.composers.map((o) => o.name).join(', '),
            arrangers: record.arrangers.map((o) => o.name).join(', '),
            editors: record.editors.map((o) => o.name).join(', '),
            genres: record.genres.map((o) => o.name).join(', '),
            languages: record.languages.map((o) => o.language).join(', '),
            lyricists: record.lyricists.map((o) => o.name).join(', '),
            accompaniments: record.accompaniments.map((o) => o.name).join(', '),
            performances: record.performed
              .map((o) => {
                const dt = new Date(o.startDate);
                return `${dt.toLocaleDateString('en-US', {
                  month: 'short',
                  year: '2-digit',
                })}`;
              })
              .join(', '),
          };
        });

        this.setState({
          data: rows,
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
        <h2 className="mb-4">Music Library</h2>
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
