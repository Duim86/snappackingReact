import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import MyProfile from './pages/MyProfile';
import Profile from './pages/Profile';
import CreateGroup from './pages/CreateGroup';
import CreateRoutes from './pages/CreateRoutes';
import RoutesInfo from './pages/RoutesInfo';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/myprofile" exact component={MyProfile} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/creategroup" exact component={CreateGroup} />
        <Route path="/createroutes" exact component={CreateRoutes} />
        <Route path="/route" exact component={RoutesInfo} />

      </Switch>
    </BrowserRouter>

  )
}