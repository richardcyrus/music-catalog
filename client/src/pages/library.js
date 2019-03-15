import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LibraryGrid from '../components/Library/libraryGrid';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';

class LibraryPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader />
        <main className="library-list w3-container" role="main">
          <LibraryGrid rows={this.props.library} />
        </main>
        <PageFooter />
      </React.Fragment>
    );
  }
}

LibraryPage.propTypes = {
  library: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    library: state.library,
  };
}

export default connect(mapStateToProps)(LibraryPage);
