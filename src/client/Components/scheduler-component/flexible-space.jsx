import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Toolbar } from '@devexpress/dx-react-scheduler-material-ui';
import {
  Grid, Typography, Popover, FormControl, Paper, Button, Select, MenuItem
} from '@material-ui/core';

import Header from '../header';

const styles = {
  flexibleSpace: {
    margin: '0 auto 0 0',
  },
};

function SimplePopover({
  startDay, endDay, endDayHourChange, startDayHourChange
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
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
        <Paper>
          <Header title="Scheduler Params" />
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Typography>Operation hours.</Typography>
              <FormControl>
                <Select
                  value={startDay}
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
                  value={endDay}
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

            </Grid>
          </Grid>
        </Paper>
      </Popover>
    </div>
  );
}

export default withStyles(styles, { name: 'FlexibleSpace' })(
  ({
    classes, startDay, endDay, startDayHour, endDayHour, ...restProps
  }) => (
      <Toolbar.FlexibleSpace {...restProps} className={classes.flexibleSpace}>
        <FormControl>
          <SimplePopover startDay={startDay} endDay={endDay} startDayHourChange={startDayHour} endDayHourChange={endDayHour} />
        </FormControl>
      </Toolbar.FlexibleSpace>
    ),
);
