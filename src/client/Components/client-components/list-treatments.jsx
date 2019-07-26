import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default (props) => {
  const { treatments, value } = props;

  return (
    <Paper>
      {treatments.length > 0
        ? treatments[value].listProcedure.map(procedure => (
          <Grid container justify="space-between">
            <Typography>
              {procedure.name}
            </Typography>
            <Grid item style={{ backgroundColor: '#DCDCDC', borderRadius: '5px', padding: '5px', fontSize: '14px' }}>
              <Typography>
                {procedure.cost}
                {'$'}
              </Typography>
            </Grid>
          </Grid>
        ))
        : <Typography>ASD</Typography>
      }

    </Paper>
  );
};
