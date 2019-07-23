import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper, Grid, Typography, Button, TextField, InputAdornment, IconButton
} from '@material-ui/core';
import {
  PagingState,
  IntegratedPaging,
  SortingState,
  SearchState,
  IntegratedFiltering,
  IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {
  Grid as DXGrid,
  Table,
  Toolbar,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';
import Search from '@material-ui/icons/Search';
import Loading from './loading-indicator';
import Error from './error-indicator';
import {
  clientsFetchData, getClientsData, deleteClientData, changeClientData
} from '../actions/item-clients';
import { URL_CLIENTS } from './const';

const getCellValue = data => `${data.name} ${data.lastname}`;

const columns = [
  { name: 'name', getCellValue, title: 'Patient name' },
  { name: 'birthday', title: 'Birthday' },
  { name: 'phone', title: 'Phone' },
  { name: 'lastAppt', title: 'Last appt' },
];

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

const dataDelete = {
  id: '5d35c79466c3cb17b012852f'
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

const searchValue = '';
const changeSearchValue = value => this.setState({ searchValue: value });

const ClientsBody = (props) => {
  const classes = useStyles();
  const { postRequest, deleteData, changeData } = props.props;
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
                    <IconButton edge="start" onClick={changeSearchValue}>
                      <Search />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Button className={classes.button} color="secondary" variant="contained" onClick={() => { postRequest(URL_CLIENTS, data); }}>Add new patient</Button>
          <Button className={classes.button} color="secondary" variant="contained" onClick={() => { deleteData(URL_CLIENTS, dataDelete); }}>Delete patient</Button>
          <Button className={classes.button} color="secondary" variant="contained" onClick={() => { changeData(URL_CLIENTS, dataChange); }}>Change patient</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

class Clients extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(URL_CLIENTS);
  }

  render() {
    const { items } = this.props;
    const { hasErrored, isLoading } = this.props;
    console.log(items);
    return (
      <Paper>
        <ClientsBody props={this.props} />
        {isLoading && <Loading />}
        {hasErrored && <Error />}
        <DXGrid
          rows={items}
          columns={columns}
        >
          <SearchState
            value={searchValue}
            onValueChange={changeSearchValue}
          />
          <PagingState
            defaultCurrentPage={0}
            pageSize={6}
          />
          <SortingState
            defaultSorting={[{ columnName: 'name', direction: 'asc' }]}
          />
          <IntegratedSorting />
          <IntegratedPaging />
          <IntegratedFiltering />
          <Table />
          <Toolbar />
          <TableHeaderRow showSortingControls />
        </DXGrid>
      </Paper>
    );
  }
}

Clients.propTypes = {
  items: PropTypes.arrayOf.isRequired,
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
  deleteData: url => dispatch(deleteClientData(url, dataDelete)),
  changeData: url => dispatch(changeClientData(url, dataChange))
});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
