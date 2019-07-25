import React, { Component } from 'react';
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

const dataChange = {
  _id: '5d36c888a6b94d24b4064bcc',
  phone: '38-13-77',
  address: '3222 New Line',
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

let changeSearchValue = '';

const ClientsHeader = (props) => {
  const classes = useStyles();

  const { postRequest, changeData } = props.props;

  const [values, setValues] = React.useState({
    name: '',
  });

  changeSearchValue = `${values.name}`;
  const handleChange = (event) => {
    setValues({ ...values, name: event.target.value });
  };
  return (changeSearchValue,
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
          <Button className={classes.button} color="secondary" variant="contained" onClick={() => { postRequest(URL_CLIENTS, data); }}>Add new patient</Button>
          <Button className={classes.button} color="secondary" variant="contained" onClick={() => { changeData(URL_CLIENTS, dataChange); }}>Change patient</Button>
        </Grid>
      </Grid>
      <CreateGrid props={props} searchValue={changeSearchValue} />
    </Grid>
  );
}; // { props: ..., searchValue: ..., a: 1, ... }

class Clients extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(URL_CLIENTS);
  }

  render() {
    const { hasErrored, isLoading } = this.props;
    return (
      <Paper>
        <ClientsHeader props={this.props} />
        {isLoading && <Loading />}
        {hasErrored && <Error />}
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
  changeData: url => dispatch(changeClientData(url, dataChange))
});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
