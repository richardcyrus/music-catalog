import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/YourScore-logo-white-02.png';
import ReactDataGrid from 'react-data-grid';

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

const LibraryGrid = ({ rows }) => {
  const ROW_COUNT = rows.length;
  // const ROW_COUNT = 0;
  // const defaultColumnProperties = {
  //   resizable: true
  // };

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
};

LibraryGrid.propTypes = {
  rows: PropTypes.array.isRequired,
};

export default LibraryGrid;
