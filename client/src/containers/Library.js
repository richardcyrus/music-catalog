import React, { Component } from 'react';
import SiteWrapper from './SiteWrapper';
import Api from '../utils/api';
import logo from '../assets/YourScore-logo-white-02.png';
import ReactDataGrid from 'react-data-grid';

export default class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { key: 'title', name: 'Title' },
        { key: 'composers', name: 'Composers' },
        { key: 'arrangers', name: 'Arranger' },
        { key: 'voices', name: 'Voicing' },
        { key: 'style', name: 'Style' },
        { key: 'occasions', name: 'Occasion' },
        { key: 'quantityOnHand', name: 'Copies', width: 64 },
        { key: 'purchasePrice', name: 'Cost', width: 64 },
      ],
      rows: [],
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

  EmptyRowsView() {
    const message = 'No data to show';
    return (
      <div
        style={{
          textAlign: 'center',
          backgroundColor: '#ddd',
          padding: '100px',
        }}
      >
        <img src={logo} alt={message} height="125" width="420" />
        <h3>{message}</h3>
      </div>
    );
  }

  render() {
    const { columns, rows } = this.state;
    const ROW_COUNT = rows.length;

    return (
      <SiteWrapper {...this.props}>
        <ReactDataGrid
          columns={columns}
          rowGetter={(i) => rows[i]}
          rowsCount={ROW_COUNT}
          minHeight={410}
          emptyRowsView={this.EmptyRowsView}
        />
      </SiteWrapper>
    );
  }
}
