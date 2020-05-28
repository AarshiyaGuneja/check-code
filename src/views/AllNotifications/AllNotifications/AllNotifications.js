import React from 'react';
import { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/styles';

import { DataInput } from '../components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));


const AllNotifications = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}> 
    
      <div className={classes.content}>
      <DataInput />
      </div>
    </div>
  );
};

export default AllNotifications;
