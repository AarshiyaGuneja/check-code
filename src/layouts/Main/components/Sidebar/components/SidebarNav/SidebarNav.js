/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, Button, colors, Collapse } from '@material-ui/core';
import {ListItemIcon, ListItemText} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 0px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium
  },
  expandButton: {
    color: colors.blueGrey[800],
    textTransform: 'none',
    letterSpacing: 0,
    width: '-20px',
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  },
  nested: {
    paddingLeft: theme.spacing(0,0,0,4),
  },
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>
));

const SidebarNav = props => {
  const { pages, className, ...rest } = props;
  const [allnotificationOpen, setallnotificationOpen] = React.useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setallnotificationOpen(!allnotificationOpen);
  };

  const expandButton = (page)=>{
    if(page.title==='All Notifications'){
      return (
        <Button className={classes.expandButton} onClick={handleClick}>
        {allnotificationOpen ? page.icon1 : page.icon2}
        </Button>
      )
  }
}

  const expandAllNotification = (page,open)=>{
    if(page.title==='All Notifications'){
      return (
      <Collapse in={open} timeout="auto" unmountOnExit>
            <List
      {...rest}
      className={clsx(classes.root, className)}
    >
          <ListItem button className={classes.item}>
          <Button
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={page.starhref}
          >
            <div className={classes.icon}>{page.staricon}</div>
            {page.startitle}
          </Button >
          </ListItem>
          <ListItem button className={classes.item}>
          <Button
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={page.unreadhref}
          >
            <div className={classes.icon}>{page.staricon}</div>
            {page.unreadtitle}
          </Button >
          </ListItem>
        </List>
      </Collapse>
      )
  }
}
  

  return (
    <List
      {...rest}
      className={clsx(classes.root, className)}
    >
      {pages.map(page => (
        <>
        <ListItem
          className={classes.item}
          disableGutters
          key={page.title}
        >
          <Button
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={page.href}
          >
            <div className={classes.icon}>{page.icon}</div>
            {page.title}
          </Button >
         {expandButton(page)}
        </ListItem>
         
         {expandAllNotification(page,allnotificationOpen)}
      
      </>
      ))}
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired
};

export default SidebarNav;
