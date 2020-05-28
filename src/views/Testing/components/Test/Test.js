import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Grid,
    Divider,
    Button,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {},
    item: {
        display: 'flex',
        flexDirection: 'column'
    }
}));

const Test = props => {
    const { className, ...rest } = props;

    const classes = useStyles();

    return (
        <Card
        >
            <form>
                <CardHeader
                />
                <Divider />
                <CardContent>
                    <Grid
                        container
                        spacing={6}
                        wrap="wrap"
                    >
                        <Grid
                            className={classes.item}
                            item
                            md={4}
                            sm={6}
                            xs={12}
                        >
                            <Typography
                                gutterBottom
                                variant="h5"
                            >
                                API Testing
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h6"
                            >
                                GET/PUT/POST/DELETE
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                        <CardActions>
                            <Button
                                color="primary"
                                variant="contained"
                                href="https://postwoman.io/"
                            >
                                Test
                            </Button>
                        </CardActions>
            </form>
        </Card>


    );
};

Test.propTypes = {
                    className: PropTypes.string
};

export default Test;
