import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/';
import { Grid, Tabs, Tab } from '@material-ui/core';
import TreatmentContainer from './client-components/treatment-container';
import { clientsFetchDataById } from '../actions/item-request-by-id';
import { treatmentFetchData } from '../actions/item-treatment';
import { URL_CLIENTS, URL_TREATMENT } from './const';
import Loading from './loading-indicator';
import Error from './error-indicator';
import Header from './header';
import PersonalData from './client-components/personal-area';
import Complaints from './client-components/complaints';
import HistoryTreatments from './client-components/history-treatments';

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
    const { fetchDataClient, fetchDataTreatment } = this.props;
    fetchDataClient(`${URL_CLIENTS}/5d20a76524e3ce238805c520`);
    fetchDataTreatment(URL_TREATMENT);
  }

  handleChange(event, nextValue) {
    this.setState({ value: nextValue });
  }

  render() {
    const {
      hasErroredClient, isLoadingClient,
      hasErroredTreatment, isLoadingTreatment,
      itemClients, itemTreatment,
      classes
    } = this.props;

    const {
      name, lastname,
      birthday, email, phone,
      city, address
    } = itemClients;
    const personalData = {
      name,
      lastname,
      birthday,
      email,
      phone,
      city,
      address
    };

    const { value } = this.state;
    return (
      <Grid container direction="column">
        <Header title="Patient Card" />
        <Grid container className={classes.root}>
          {(hasErroredClient || hasErroredTreatment) && <Loading />}
          {(isLoadingClient || isLoadingTreatment) && <Error />}
          <PersonalData data={personalData} />
          <Grid xs={9}>
            <Grid container direction="column" justify="flex-start">
              <Tabs value={value} onChange={this.handleChange}>
                <Tab label="Treatment" />
                <Tab label="Treatment history" />
                <Tab label="Complaints" />
              </Tabs>
              {value === 0 && <TreatmentContainer />}
              {value === 1 && (
                <HistoryTreatments
                  schedules={itemClients.historyTreatment}
                  listTreatment={itemTreatment}
                />
              )}
              {value === 2 && <Complaints data={itemClients.complaints} />}
            </Grid>
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
    height: '97vh',
    margin: '0px',
  },
});

const ClientsArea = withStyles(classStyle)(ClientArea);

ClientArea.propTypes = {
  itemClients: PropTypes.arrayOf.isRequired,
  fetchDataClient: PropTypes.func.isRequired,
  hasErroredClient: PropTypes.bool.isRequired,
  isLoadingClient: PropTypes.bool.isRequired,

  itemTreatment: PropTypes.arrayOf.isRequired,
  fetchDataTreatment: PropTypes.func.isRequired,
  hasErroredTreatment: PropTypes.bool.isRequired,
  isLoadingTreatment: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  itemClients: state.idRequest.costomerDate,
  hasErroredClient: state.idRequest.hasErrored,
  isLoadingClient: state.idRequest.isLoading,

  itemTreatment: state.requestTreatment.treatment,
  hasErroredTreatment: state.requestTreatment.hasErrored,
  isLoadingTreatment: state.requestTreatment.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchDataClient: url => dispatch(clientsFetchDataById(url)),
  fetchDataTreatment: url => dispatch(treatmentFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientsArea);
