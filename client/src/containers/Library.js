import React, { Component } from 'react';
import SiteWrapper from './SiteWrapper';
import Api from '../utils/api';
import ReactTable from 'react-table';
import Detail from '../components/scoreDetail';

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
          filterable: true,
        },
        {
          accessor: 'style',
          Header: 'Style',
          filterable: true,
        },
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
      showDetail: false,
      detailData: [],
    };

    this.fetchData = this.fetchData.bind(this);
    this.showDetail = this.showDetail.bind(this);
    this.closePage = this.closePage.bind(this);
    this.showPage = this.showPage.bind(this);
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

    Api.listLibrary(queryParams)
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

  showDetail(rowData) {
    this.state.showDetail ? this.closePage() : this.showPage(rowData);
  }

  showPage(rowData) {
    const { original } = rowData;

    this.setState({
      showDetail: true,
      detailData: original,
    });
  }

  closePage() {
    this.setState({ showDetail: false });
  }

  render() {
    const {
      columns,
      data,
      pages,
      loading,
      pageSize,
      defaultPageSize,
      detailData,
    } = this.state;

    // minRows will remove empty rows if there aren't enough rows to meet
    // the defaultPageSize.
    const minRows =
      data.length > 0 && data.length < defaultPageSize ? data.length : pageSize;

    return (
      <SiteWrapper {...this.props}>
        {this.state.showDetail ? (
          <React.Fragment>
            <Detail rowData={detailData} toggleToFalse={this.closePage} />
          </React.Fragment>
        ) : (
          <React.Fragment>
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
              getTdProps={(state, rowInfo) => {
                return {
                  onClick: () => {
                    this.showDetail(rowInfo);
                  },
                };
              }}
            />
          </React.Fragment>
        )}
      </SiteWrapper>
    );
  }
}
