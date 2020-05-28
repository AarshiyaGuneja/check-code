import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  content: {
    padding: 0
  },
  image: {
    height: 48,
    width: 48
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

export default function SubscriptionList(props) {
  const classes = useStyles();

  const subscriptions = props.subscriptions
  return (
    <Card>
      <CardHeader
        title="Subscription List"
      />
      <Divider />
      <CardContent className={classes.content}>
        <List>
          {subscriptions.map((d, i) => (
            <ListItem
              divider={i < subscriptions.length - 1}
              key={d.id}
            >
              <ListItemText
                primary={d.subscription}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Divider />
    </Card>
  );
};

SubscriptionList.propTypes = {
  className: PropTypes.string
};
