import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  AllNotifications as AllNotificationsView,
  Starred as StarredView,
  Unread as UnreadView,
  Subscribe as SubscribeView,
  Account as AccountView,
  Settings as SettingsView,
  NotFound as NotFoundView,
  Testing as TestingView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/all"
      />
      {/*  <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
    /> */}
      <RouteWithLayout
        component={AllNotificationsView}
        exact
        layout={MainLayout}
        path="/all"
      />
      <RouteWithLayout
        component={StarredView}
        exact
        layout={MainLayout}
        path="/starred"
      />
      <RouteWithLayout
        component={UnreadView}
        exact
        layout={MainLayout}
        path="/unread"
      />
      <RouteWithLayout
        component={SubscribeView}
        exact
        layout={MainLayout}
        path="/subscribe"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={TestingView}
        exact
        layout={MainLayout}
        path="/test"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
