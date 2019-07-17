import React, { Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { MenuList, MenuItem, Paper, Button } from '@material-ui/core';
import EventNote from '@material-ui/icons/EventNote';
import Group from '@material-ui/icons/Group';
import Settings from '@material-ui/icons/Settings';
import Equalizer from '@material-ui/icons/Equalizer';
import Person from '@material-ui/icons/Person';
import Clients from '../Containers/clients.jsx';
import Analytics from '../Containers/analytics';
import Lk from '../Containers/lk';
import SettingsPage from '../Containers/settings.jsx';
import SchedulerPage from '../Containers/scheduler';
import ClientArea from '../Containers/clientPage';


const useStyles = makeStyles(theme => ({
  html: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  li1: {
    alignSelf: 'stretch',
    flexGrow: 0,
  },
  li2: {
    alignSelf: 'stretch',
    flexGrow: 1,
  },
}));

const headerStyles = theme => ({
  menu: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    height: '100%',
  },
  svgicon: {
    fontSize: '2rem',
  },
  active: {
    '&>li>svg': {
      color: theme.palette.primary.light,
      fontSize: '2rem',
    },
  },
  menuItem: {
    justifyContent: 'center'
  },
  li: {
    listStyleType: 'none',
    alignSelf: 'stretch',
    width: '58px'
  },
});
function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.html}>
        <div className={classes.li1}><Header /></div>
        <div className={classes.li2}><BodyRouter /></div>
      </div>
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
      <div className={classes.menu}>
        <div className={classes.li}>
          <MenuList>
            <NavLink activeClassName={classes.active} to="/scheduler">
              <MenuItem className={classes.menuItem}>
                <EventNote className={classes.svgicon} color='secondary' />
              </MenuItem>
            </NavLink>
            <NavLink activeClassName={classes.active} to="/clients">
              <MenuItem className={classes.menuItem} >
                <Group className={classes.svgicon} color='secondary'/>
              </MenuItem>
            </NavLink>
            <NavLink activeClassName={classes.active} to="/analytics">
              <MenuItem className={classes.menuItem}>
                <Equalizer className={classes.svgicon} color='secondary'/>
              </MenuItem>
            </NavLink>
            <NavLink activeClassName={classes.active} to="/settings">
              <MenuItem className={classes.menuItem}>
                <Settings className={classes.svgicon} color='secondary'/>
              </MenuItem>
            </NavLink>
          </MenuList>
        </div>
        <div className={classes.li}>
          <NavLink activeClassName={classes.active} to="/lk">
            <MenuItem className={classes.menuItem}><Person className={classes.svgicon} color='secondary'/></MenuItem>
          </NavLink>
        </div>
      </div>
    );
  }
}

const Header = withStyles(headerStyles)(HeaderBase);

export default App;
