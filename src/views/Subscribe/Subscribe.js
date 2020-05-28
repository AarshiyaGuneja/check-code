import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {Grid} from '@material-ui/core';

import { Subscriptions, Unsubscribe, SubscriptionListInput, UnsubscribeInput } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Subscribe = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
       <Grid
          item
          lg={6}
          md={6}
          xl={6}
          xs={6}
        >
          <Subscriptions />
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          xl={6}
          xs={6}
        >
          <UnsubscribeInput />
        </Grid>
       <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <SubscriptionListInput />
      </Grid> 
      </Grid>
    </div>
  );
};

export default Subscribe;



{ /*const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const ProductList = () => {
  const classes = useStyles();

  const [products] = useState(mockData);

  return (
    <div className={classes.root}>
      <ProductsToolbar />
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {products.map(product => (
            <Grid
              item
              key={product.id}
              lg={4}
              md={6}
              xs={12}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default ProductList;

*/}
