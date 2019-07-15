import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clientsFetchData } from '../Actions/itemClients';


class Clients extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData('http://localhost:8080/api/clients');
  }

  render() {
    console.log(this.props);
    const { hasErrored, isLoading } = this.props;
    if (hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (isLoading) {
      return <p>Loading…</p>;
    }

    return <p>Loading is complete</p>;
  }
}

Clients.propTypes = {
  fetchData: PropTypes.func.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  items: state.itemsClients.itemsClients,
  hasErrored: state.itemsClients.hasErrored,
  isLoading: state.itemsClients.isLoading
});


const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(clientsFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
