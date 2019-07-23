import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper, Grid, Tabs, Tab, Typography
} from '@material-ui/core/';
import TreatmentContainer from './client-components/treatment-container';
import { clientsFetchDataById } from '../actions/item-request-by-id';
import { URL_CLIENTS } from './const';
import Loading from './loading-indicator';
import Error from './error-indicator';
import PersonalData from './client-components/personal-area';
import Header from './header';

function HistoryContainer() {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Paper>Plan</Paper>
        <Paper>Total Amount</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>Meeting</Paper>
      </Grid>
    </Grid>
  );
}

function ComplaintsContainer() {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Paper>Complaints</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>Notes</Paper>
      </Grid>
    </Grid>
  );
}

class ClientArea extends Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.state = {
      value: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(`${URL_CLIENTS}/5d20a76524e3ce238805c520`);
  }

  handleChange(event, nextValue) {
    this.setState({ value: nextValue });
  }

  render() {
    const {
      hasErrored, isLoading, classes, items
    } = this.props;

    const { value } = this.state;
    const personalData = {
      name: items.name,
      lastname: items.lastname,
      birthday: items.birthday,
      city: items.city,
      address: items.address,
      email: items.email,
      phone: items.phone
    };
    console.log(items.birthday);
    return (
      <Grid container direction="column">
        <Header title="Patient Card" />
        <Grid container className={classes.root}>
          {isLoading && <Loading />}
          {hasErrored && <Error />}
          <PersonalData data={personalData} />
          <Grid container xs={9} direction="column" justify="flex-start">
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="Treatment" />
              <Tab label="Treatment history" />
              <Tab label="Complaints" />
            </Tabs>
            {value === 0 && <TreatmentContainer />}
            {value === 1 && <HistoryContainer />}
            {value === 2 && <ComplaintsContainer />}
          </Grid>

        </Grid>
      </Grid>
    );
  }
}

const classStyle = theme => ({
  header: {
    textAlign: 'left',
    fontSize: 18,
    height: '3vh',
    padding: '15px',
    color: theme.palette.text.secondary,
  },
  root: {
    backgroundColor: '#E9ECF1',
    height: '94vh',
    margin: '0px',
  },
});

const ClientsArea = withStyles(classStyle)(ClientArea);

ClientArea.propTypes = {
  items: PropTypes.arrayOf.isRequired,
  fetchData: PropTypes.func.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  items: state.idRequest.costomerDate,
  hasErrored: state.idRequest.hasErrored,
  isLoading: state.idRequest.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(clientsFetchDataById(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientsArea);
