import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SvgIcon from '@material-ui/core/SvgIcon';
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
  const { title, documents } = props;
  const classes = useStyle();

  return (
    <Grid className={classes.root}>
      <Typography className={classes.title}>{title}</Typography>
      {documents.length !== 0
        ? (
          <Grid>
            {documents.map(document => (
              <SvgIcon>
                <path d='pdf' />
              </SvgIcon>
            ))}
          </Grid>
        )
        : <Typography className={classes.text}>No file</Typography>
      }
    </Grid>
  );
};
