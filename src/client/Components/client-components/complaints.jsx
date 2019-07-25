import React from 'react';
import {
  Paper, Grid
} from '@material-ui/core/';
import makeStyle from '@material-ui/styles/makeStyles';
import List from './list';
import Note from './note';
import Document from './document';


const useStyle = makeStyle(theme => ({
  root: {
    // height: '100%',
  },
  list: {
    paddingTop: '10px',
    paddingLeft: '10px',
    height: '100%'
  }
}));

export default (props) => {
  const { data } = props;
  const classes = useStyle();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={6}>
        <Paper className={classes.list}>
          <List data={data.complaints} title="Complaints" />
          <List data={data.allergies} title="Allergies" />
          <List data={data.preparations} title="Medical preparations" />
          <Document documents={data.documents} title="Documents" />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.list}>
          <Note notes={data.notes} title="Notes" />
        </Paper>
      </Grid>
    </Grid>
  );
};
