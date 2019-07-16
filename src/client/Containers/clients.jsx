import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, Button, TextField, InputAdornment, IconButton } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import { clientsFetchData } from '../Actions/itemClients';


const useStyles = makeStyles(theme => ({
  header: {
    textAlign: 'left',
    fontSize: 18,
    // height: '3vh',
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

function ClientsBody() {
  const classes = useStyles();

  return (
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
          <Button className={classes.button} color='secondary' variant="contained">Add new patient</Button>
        </Grid>
      </Grid>

      {/* Body */}
      <Grid item className={classes.root}>
        <Typography>Body</Typography>
      </Grid>
    </Grid>
  );
}
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

    return (<ClientsBody />);
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
