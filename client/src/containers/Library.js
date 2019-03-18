import React, { Component } from 'react';
import SiteWrapper from './SiteWrapper';
import Api from '../utils/api';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

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
      ],
      rows: [],
      pages: -1,
    };
  }

  componentDidMount() {
    this.loadMusicLibrary();
  }

  loadMusicLibrary = () => {
    return Api.listMusic()
      .then((result) => {
        const rows = result.data.map((record) => {
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
          };
        });
        this.setState({ rows });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { columns, rows } = this.state;

    return (
      <SiteWrapper {...this.props}>
        <ReactTable
          columns={columns}
          data={rows}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </SiteWrapper>
    );
  }
}
