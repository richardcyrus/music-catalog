import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LibraryGrid from '../components/Library/libraryGrid';

class LibraryPage extends React.Component {
  render() {
    return <LibraryGrid rows={this.props.library} />;
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
