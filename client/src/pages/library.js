import React from 'react';
import Api from '../utils/api';
import logo from '../assets/YourScore-logo-white-02.png';
import ReactDataGrid from 'react-data-grid';

class LibraryPage extends React.Component {
  state = {
    library: [],
  };

  loadMusic() {
    Api.listMusic()
      .then((res) => {
        const library = res.data.map((item) => {
          return {
            ...item,
            occasions: item.occasions.map((o) => o.name).join(', '),
            composers: item.composers.map((o) => o.name).join(', '),
            arrangers: item.arrangers.map((o) => o.name).join(', '),
            editors: item.editors.map((o) => o.name).join(', '),
            genres: item.genres.map((o) => o.name).join(', '),
            languages: item.languages.map((o) => o.language).join(', '),
            lyricists: item.lyricists.map((o) => o.name).join(', '),
            accompaniments: item.accompaniments.map((o) => o.name).join(', '),
          };
        });

        this.setState({ library });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.loadMusic();
  }

  render() {
    const rows = this.state.library;
    const ROW_COUNT = rows.length;
    // const ROW_COUNT = 0;
    // const defaultColumnProperties = {
    //   resizable: true
    // };

    const EmptyRowsView = () => {
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
    };

    const columns = [
      { key: 'title', name: 'Title' },
      { key: 'composers', name: 'Composers' },
      { key: 'arrangers', name: 'Arranger' },
      { key: 'voices', name: 'Voicing' },
      { key: 'style', name: 'Style' },
      { key: 'occasions', name: 'Occasion' },
      { key: 'quantityOnHand', name: 'Copies', width: 64 },
      { key: 'purchasePrice', name: 'Cost', width: 64 },
    ];

    return (
      <div>
        <ReactDataGrid
          columns={columns}
          rowGetter={(i) => rows[i]}
          rowsCount={ROW_COUNT}
          minHeight={410}
          emptyRowsView={EmptyRowsView}
        />
      </div>
    );
  }
}

export default LibraryPage;
