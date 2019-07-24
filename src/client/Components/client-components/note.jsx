import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import makeStyle from '@material-ui/styles/makeStyles';

const formatDate = (date) => {
  const dateParse = new Date(date);
  return `${dateParse.getMonth()}/${dateParse.getDate()}/${dateParse.getFullYear()}`;
};

const useStyle = makeStyle(theme => ({
  root: {
    margin: theme.spacing(3),
  },
  title: {
    fontWeight: 600,
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2)
  },
  text: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2)
  }
}));

export default (props) => {
  const { title, notes } = props;
  const classes = useStyle();

  return (
    <Grid className={classes.root}>
      <Typography className={classes.title}>{title}</Typography>
      {notes.length !== 0
        ? (
          <Grid>
            {notes.map(note => (
              <Typography className={classes.text}>
                {formatDate(note.date)}
                {' '}
                {note.text}
              </Typography>
            ))}
          </Grid>
        )
        : <Typography className={classes.text}>No notes</Typography>
      }
    </Grid>
  );
};
