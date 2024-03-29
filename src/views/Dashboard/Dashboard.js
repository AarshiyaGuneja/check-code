import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import SubscribedNotifications from './components/SubscribedNotifications';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={12}
          md={15}
          xl={12}
          xs={17}
        >
          <SubscribedNotifications />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
