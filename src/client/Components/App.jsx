import React, { Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EventNote from '@material-ui/icons/EventNote';
import Group from '@material-ui/icons/Group';
import Settings from '@material-ui/icons/Settings';
import Equalizer from '@material-ui/icons/Equalizer';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Person from '@material-ui/icons/Person';
import Clients from '../Containers/clients';
import Analytics from '../Containers/analytics';
import Lk from '../Containers/lk';
import SettingsPage from '../Containers/settings';
import SchedulerPage from '../Containers/scheduler';
import ClientArea from '../Containers/clientPage';

const useStyles = makeStyles(({
  body: {
    marginLeft: '58px',
    position: 'fixed',
  },
  html: {
    backgroundColor: '#111111',
  }
}));

const headerStyles = theme => ({
  menu: {
    width: '58px',
    height: '100%',
    position: 'fixed',
  },
  lk: {
    position: 'absolute',
    bottom: '16px',
    marginLeft: '16px',
  },
  svgicon: {
    color: '#11cb5f',
    fontSize: '2rem',
  },
  active: {
    '&>li>div>svg': {
      color: theme.palette.primary.dark,
      fontSize: '2rem',
    }
  },
  li: {
    listStyleType: 'none',
  }
});
function App() {
  const classes = useStyles();
  return (
    <Router>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="stretch"
      >
        <Grid item>
          <Header className={classes.html} />
        </Grid>
        <Grid item>
          <BodyRouter />
        </Grid>
      </Grid>
    </Router>
  );
}

function BodyRouter() {
  const classes = useStyles();
  return (
    <Paper className={classes.body}>
      <Route exact path="/" component={SchedulerPage} />
      <Route exact path="/scheduler" component={SchedulerPage} />
      <Route path="/clients" component={Clients} />
      <Route path="/analytics" component={Analytics} />
      <Route path="/settings" component={SettingsPage} />
      <Route path="/lk" component={Lk} />
      <Route path="/test" component={ClientArea} />
    </Paper>
  );
}

class HeaderBase extends Component {
  constructor(props) {
    super(props);
    const A = '';
  }


  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.menu}>
        <MenuList>
          <NavLink activeClassName={classes.active} to="/scheduler">
            <MenuItem>
              <ListItemIcon>
                <EventNote className={classes.svgicon} />
              </ListItemIcon>
            </MenuItem>
          </NavLink>
          <NavLink activeClassName={classes.active} to="/clients">
            <MenuItem>
              <ListItemIcon>
                <Group className={classes.svgicon} />
              </ListItemIcon>
            </MenuItem>
          </NavLink>
          <NavLink activeClassName={classes.active} to="/analytics">
            <MenuItem>
              <ListItemIcon>
                <Equalizer className={classes.svgicon} />
              </ListItemIcon>
            </MenuItem>
          </NavLink>
          <NavLink activeClassName={classes.active} to="/settings">
            <MenuItem>
              <ListItemIcon>
                <Settings className={classes.svgicon} />
              </ListItemIcon>
            </MenuItem>
          </NavLink>
        </MenuList>
        <div className={classes.lk}>
          <NavLink activeClassName={classes.active} to="/lk">
            <li className={classes.li}><div><Person className={classes.svgicon} /></div></li>
          </NavLink>
        </div>
      </Paper>
    );
  }
}

const Header = withStyles(headerStyles)(HeaderBase);

export default App;
