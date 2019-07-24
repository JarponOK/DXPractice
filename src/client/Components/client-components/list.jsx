import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import makeStyle from '@material-ui/styles/makeStyles';

const useStyle = makeStyle(theme => ({
  root: {
    margin: theme.spacing(3),
  },
  title: {
    fontWeight: 600,
    color: theme.palette.text.secondary,
  },
  text: {
    color: theme.palette.text.secondary,
  }
}));

export default (props) => {
  const { title, data } = props;
  const classes = useStyle();

  return (
    <Grid className={classes.root}>
      <Typography className={classes.title}>{title}</Typography>
      {data.length !== 0
        ? (
          <Grid>
            {data.map(item => (
              <li className={classes.text}>
                <Typography>{item}</Typography>
              </li>
            ))}
          </Grid>
        )
        : <Typography className={classes.text}>No contraindications</Typography>
      }
    </Grid>
  );
};
