import React from 'react';
import Api from '../utils/api';
import logo from '../assets/YourScore-logo-white-02.png';
import ReactDataGrid from 'react-data-grid';
import SearchBar from '../components/SearchBar';

class LibraryPage extends React.Component {
  state = {
    library: [],
    // Used to filter sheet music table
    attribute: '',
    value: '',
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

  handleInputChange = (event) => {
    const { name, value } = event.target;
    // Code responsible for loading all music_sheet rows if filter fields are both empty
    if (name === 'attribute' && value === '') {
      if (this.state.value === '') {
        this.loadMusic();
      }
    }
    if (name === 'value' && value === '') {
      if (this.state.attribute === '') {
        this.loadMusic();
      }
    }

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let filteringConditions = {
      tableColumn: this.state.attribute,
      tableValue: this.state.value,
    };

    Api.search(filteringConditions)
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
      .catch((err) => console.log(err));
  };

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

    // Options to provide for dropdown
    const filterColumns = [
      { key: 'blank', value: '' },
      { key: 'SheetMusic_title', value: 'Title' },
      { key: 'Composer_name', value: 'Composer' },
      { key: 'Arranger_name', value: 'Arranger' },
      { key: 'SheetMusic_voices', value: 'Voicing' },
      { key: 'SheetMusic_style', value: 'Style' },
      { key: 'Occasion_name', value: 'Occasion' },
      { key: 'SheetMusic_quantityOnHand', value: 'Copies' },
      { key: 'SheetMusic_purchasePrice', value: 'Cost' },
    ];
    return (
      <div>
        <SearchBar
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          loadMusic={this.loadMusic}
          filterColumns={filterColumns}
        />
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
