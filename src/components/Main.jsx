import React from 'react';
import {
  Grid, Paper, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import BaseApp from './containers/BaseApp';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: theme.palette.secondary.dark,
    width: '100%',
  },
}));

function Videos() {
  const classes = useStyles();
  return (
    <BaseApp>
      <Grid container spacing={6} justify="center">
        <Grid item xs={12}>
          <Typography>test</Typography>
        </Grid>
      </Grid>
    </BaseApp>
  );
}

export default Videos;
