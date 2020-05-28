import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import { ExpandLess, ExpandMore, StarBorder } from '@material-ui/icons';
import StarIcon from '@material-ui/icons/Star';
import EditAttributesRoundedIcon from '@material-ui/icons/EditAttributesRounded';

import { Footer, SidebarNav } from './components';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const pages = [
  {
    title: 'Testing',
    href: '/test',
    icon: <EditAttributesRoundedIcon />
  },
  {
    title: 'All Notifications',
    href: '/all',
    icon: <PeopleIcon />,
    icon1: <ExpandLess />,
    icon2: <ExpandMore />,
    staricon: <StarIcon htmlColor='primary' />,
    startitle: "Starred",
    starhref: "/starred",
    unreadtitle: "Unread",
    unreadhref: "/unread"
  },

  {
    title: 'Subscribe',
    href: '/subscribe',
    icon: <SubscriptionsIcon />
  },
  {
    title: 'Account',
    href: '/account',
    icon: <AccountBoxIcon />
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: <SettingsIcon />
  }
];

const Main = props => {
  const classes = useStyles();
  const { children } = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color='#FFFFFF'
            variant="contained"
          >
            <h2>NAV-Notification-Hub</h2>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
        <Footer />
      </main>
    </div>
  );
}
export default Main;








// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import clsx from 'clsx';
// import { makeStyles, useTheme } from '@material-ui/styles';
// import { useMediaQuery } from '@material-ui/core';

// import { Sidebar, Topbar, Footer } from './components';

// const useStyles = makeStyles(theme => ({
//   root: {
//     paddingTop: 56,
//     height: '100%',
//     [theme.breakpoints.up('sm')]: {
//       paddingTop: 64
//     }
//   },
//   shiftContent: {
//     paddingLeft: 240
//   },
//   content: {
//     height: '100%'
//   }
// }));

// const Main = props => {
//   const { children } = props;

//   const classes = useStyles();
//   const theme = useTheme();
//   const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
//     defaultMatches: true
//   });

//   const [openSidebar, setOpenSidebar] = useState(false);

//   const handleSidebarOpen = () => {
//     setOpenSidebar(true);
//   };

//   const handleSidebarClose = () => {
//     setOpenSidebar(false);
//   };

//   const shouldOpenSidebar = isDesktop ? true : openSidebar;

//   return (
//     <div
//       className={clsx({
//         [classes.root]: true,
//         [classes.shiftContent]: isDesktop
//       })}
//     >
//       <Topbar onSidebarOpen={handleSidebarOpen} />
//       <Sidebar
//         onClose={handleSidebarClose}
//         open={shouldOpenSidebar}
//         variant={isDesktop ? 'persistent' : 'temporary'}
//       />
//       <main className={classes.content}>
//         {children}
//         <Footer />
//       </main>
//     </div>
//   );
// };

// Main.propTypes = {
//   children: PropTypes.node
// };

// export default Main;
