import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  LinearProgress
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  progress: {
    marginTop: theme.spacing(2)
  }
}));

const TaskProgress = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              gutterBottom
              variant="h5"
            >
              User Name
            </Typography>
            <Typography
              className={classes.title}
              gutterBottom
              variant="h6"
            >
               Dhammakka
            </Typography>
            {/* <Typography variant="h3">75.5%</Typography> */}
          </Grid>
          <Grid item>
          <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              12:18:5
            </Typography>
          </Grid>
        </Grid>
        <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body1"
              align='center'
            >
              Exp.Time(12:18:5)
            </Typography>
        <LinearProgress
          className={classes.progress}
          value={75.5}
          variant="determinate"
        />
      </CardContent>
    </Card>
  );
};



export default TaskProgress;
