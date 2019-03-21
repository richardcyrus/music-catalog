import React, { Component } from 'react';
// import SiteWrapper from './SiteWrapper';
import Api from '../utils/api';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { stat } from 'fs';
import Detail from '../components/Detail';

export default class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        {
          accessor: 'title',
          Header: 'Title',
          style: { whiteSpace: 'unset' },
          filterable: true,
        },
        {
          accessor: 'composers',
          Header: 'Composers',
          style: { whiteSpace: 'unset' },
          filterable: true,
        },
        {
          accessor: 'arrangers',
          Header: 'Arranger',
          style: { whiteSpace: 'unset' },
          filterable: true,
        },
        {
          accessor: 'voices',
          Header: 'Voicing',
          style: { whiteSpace: 'unset' },
        },
        { accessor: 'style', Header: 'Style', filterable: true },
        {
          accessor: 'occasions',
          Header: 'Occasion',
          style: { whiteSpace: 'unset' },
          filterable: true,
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
      data: [],
      pages: -1,
      defaultPageSize: 10,
      loading: false,
      // Used to determine drill down functionality
      showDetail: false,
      rowData: [],
    };
  }

  fetchData = (state, instance) => {
    this.setState({ loading: true });

    Api.listMusic(state.pageSize, state.page)
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
          };
        });
        this.setState({
          data: rows,
          pages: res.data.pages,
          loading: false,
        });
      })
      .catch((err) => console.log(err));

    let { filtered } = state;
    if (filtered.length > 0) {
      const index = filtered.length - 1;
      let filteringConditions = {};
      filteringConditions.tableColumn = filtered[index].id;
      filteringConditions.tableValue = filtered[index].value;
      if (filteringConditions.tableValue.length > 2) {
        this.handleFilter(state.pageSize, state.page, filteringConditions);
      }
    }
  };

  // Responsible for handling live filter for columns
  handleFilter = (pageSize, page, filteringConditions) => {
    Api.search(pageSize, page, filteringConditions)
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
          };
        });
        this.setState({
          data: rows,
          pages: res.data.pages,
          loading: false,
        });
      })
      .catch((err) => console.log(err));
  };

  // Sets showDetail to true and grabs pertinent data and stores within detailData
  toggleToTrue = (rowData) => {
    let { original } = rowData;
    console.log(original);
    this.setState({
      showDetail: true,
      rowData: original,
    });
  };

  toggleToFalse = () => {
    this.setState({
      showDetail: false,
    });
  };

  // Toggles showDetail between true and false
  toggleDetail = (rowData) => {
    this.state.showDetail ? this.toggleToFalse() : this.toggleToTrue(rowData);
  };

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
      <div>
        {this.state.showDetail ? (
          <Detail
            rowData={this.state.rowData}
            toggleToFalse={this.toggleToFalse}
          />
        ) : (
          <ReactTable
            columns={columns}
            data={data}
            pages={pages} // Newly added
            loading={loading} // Newly added
            onFetchData={this.fetchData} // Newly added
            manual // Newly added in regards for filtering, paging, and sorting
            sortable={false} // Newly added
            defaultPageSize={defaultPageSize}
            className="-striped -highlight"
            minRows={minRows}
            getTdProps={(state, rowInfo, column, instance) => {
              return {
                onClick: (e, handleOriginal) => {
                  this.toggleDetail(rowInfo);
                },
              };
            }}
          />
        )}
      </div>
    );
  }
}
