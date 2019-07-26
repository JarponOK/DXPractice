import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper, Grid, Typography, Button, TextField, InputAdornment, IconButton
} from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import Loading from './loading-indicator';
import Error from './error-indicator';
import {
  clientsFetchData, getClientsData, deleteClientData, changeClientData
} from '../actions/item-clients';
import CreateGrid from './grid-component/clients-grid';
import { URL_CLIENTS } from './const';

const data = {
  name: 'Genry',
  lastname: 'Wood',
  birthday: '1954-02-23T20:00:00.000Z',
  phone: '38-13-76',
  email: 'perchikmen@email.ru',
  city: 'Tula',
  address: '3231 New Line',
};

const useStyles = makeStyles(theme => ({
  header: {
    textAlign: 'left',
    fontSize: 18,
    padding: '15px',
    color: theme.palette.text.secondary,
  },
  root: {
    backgroundColor: '#E9ECF1',
    height: '86vh',
    margin: '0px',
    padding: '25px',
  },
  button: {
    marginRight: '25px',

  }
}));

const ClientsHeader = (props) => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    name: '1',
  });

  const handleChange = (event) => {
    setValues({ ...values, name: event.target.value });
  };

  return (`${values.name}`,
    <Grid container direction="column">

      {/* Top Menu */}
      <Grid item xs={12} style={{ marginBottom: '25px', paddingLeft: '25px' }}>
        <Typography className={classes.header}>Patient</Typography>

        <Grid container direction="row" alignItems="center" justify="space-between">
          <Grid item>
            <TextField
              id="filled-adornment-password"
              variant="filled"
              label="Search"
              type="search"
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton edge="start">
                      <Search />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <NavLink activeClassName={classes.active} to="/test">
            <Button className={classes.button} color="secondary" variant="contained">Add new patient</Button>
          </NavLink>
        </Grid>
        <Grid container direction="row" justify="space-between" className={classes.root}>
          <CreateGrid props={props} searchValue={`${values.name}`} />
        </Grid>
      </Grid>
    </Grid>
  );
}; // { props: ..., searchValue: ..., a: 1, ... }

class Clients extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(URL_CLIENTS);
  }

  render() {
    const { isLoading } = this.props;
    console.log(this.props);
    return (
      <Paper>
        {isLoading && <Loading />}
        <ClientsHeader props={this.props} />
      </Paper>
    );
  }
}

Clients.propTypes = {
  fetchData: PropTypes.func.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  items: state.itemsClients.сlients,
  hasErrored: state.itemsClients.hasErrored,
  isLoading: state.itemsClients.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(clientsFetchData(url)),
  postRequest: url => dispatch(getClientsData(url, data)),
  deleteData: (url, deleted) => dispatch(deleteClientData(url, deleted)),
  changeData: url => dispatch(changeClientData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
