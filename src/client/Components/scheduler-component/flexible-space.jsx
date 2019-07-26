import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Toolbar } from '@devexpress/dx-react-scheduler-material-ui';
import {
  Typography, Popover, FormControl, Paper, Button, Select, MenuItem
} from '@material-ui/core';

import Header from '../header';

const styles = makeStyles(theme => ({
  container: {
    width: theme.spacing(35),
    padding: 0,
    paddingBottom: theme.spacing(2),
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 0),
  },
  content: {
    padding: theme.spacing(2),
    paddingTop: 0,
  },
}));

function SimplePopover({
  startDayHour,
  endDayHour,
  endDayHourChange,
  startDayHourChange,
  currentRoom,
  roomChange
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = styles();

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <Paper>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Settings
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Paper className={classes.container}>
          <Header title="Scheduler Params" />
          <div className={classes.content}>
            <div className={classes.wrapper}>
              <Typography>Operation hours.</Typography>
              <FormControl>
                <Select
                  value={startDayHour}
                  onChange={event => startDayHourChange(event.target.value)}
                  inputProps={{
                    id: 'age-simple',
                  }}
                >
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={11}>11</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <Select
                  value={endDayHour}
                  onChange={event => endDayHourChange(event.target.value)}
                  inputProps={{
                    id: 'age-simple',
                  }}
                >
                  <MenuItem value={17}>17</MenuItem>
                  <MenuItem value={18}>18</MenuItem>
                  <MenuItem value={19}>19</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.wrapper}>
              <Typography>Current Room.</Typography>
              <FormControl>
                <Select
                  value={currentRoom}
                  onChange={event => roomChange(event.target.value)}
                  inputProps={{
                    id: 'age-simple',
                  }}
                >
                  <MenuItem value="All Rooms">All Rooms</MenuItem>
                  <MenuItem value="Room 1">Room 1</MenuItem>
                  <MenuItem value="Room 25">Room 25</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </Paper>
      </Popover>
    </Paper>
  );
}

export default withStyles(styles, { name: 'FlexibleSpace' })(
  ({
    classes,
    roomChange,
    currentRoom,
    startDayHour,
    endDayHour,
    startDayHourChange,
    endDayHourChange,
    ...restProps
  }) => (
    <Toolbar.FlexibleSpace {...restProps} className={classes.flexibleSpace}>

      <SimplePopover
        currentRoom={currentRoom}
        startDayHour={startDayHour}
        endDayHour={endDayHour}
        startDayHourChange={startDayHourChange}
        endDayHourChange={endDayHourChange}
        roomChange={roomChange}
      />

    </Toolbar.FlexibleSpace>
  ),
);
