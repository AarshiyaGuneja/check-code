import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Test } from './components';

const useStyles = makeStyles(() => ({
    root: {},
    item: {
        display: 'flex',
        flexDirection: 'column'
    }
}));

const Testing = () => {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Grid
                container
                spacing={4}
            >
                <Grid
                    item
                    md={8}
                    xs={10}
                >
                    <Test />
                </Grid>
            </Grid>
        </div>
    );
};

export default Testing;
